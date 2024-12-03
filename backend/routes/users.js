const express = require('express');
const router = express.Router();
const userSchema = require('../schemas/users_schemas')
const updateUserSchema = require('../schemas/users_schemas')

const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const prisma = new PrismaClient()

router.post('/register', async (req, res) => {
  try {
    // Pegando os dados do Body
    const parseData = userSchema.parse(req.body)

    // Checando se o nome de usuário (username) já está em uso
    const isSameUsername = await prisma.user.findUnique({
      where: {
        username: parseData.username
      }
    })

    if (isSameUsername) {
      return res.status(400).json({ error: "Esse nome de usuário já está em uso."})
    }

    // Criptografando a senha com o bcrypt
    const cryptoPassword = await bcrypt.hash(parseData.password, 10)

    // Pegando os dados do parseData para criar o usuário
    const aNewUser = await prisma.user.create({
      data: {
        name: parseData.name,
        username: parseData.username,
        lastName: parseData.lastName,
        password: cryptoPassword,
        email: parseData.email,
        avatar: parseData.avatar,
        phone: parseData.phone,
        birthDate: parseData.birthDate
          ? new Date (parseData.birthDate)
          : null,
      }
    })

    // Retornar o usuário por JSON (Sem a senha)
    const { password, ...userWithoutPassword} = aNewUser
    res.status(201).json({ "Novo usuário criado:": userWithoutPassword})
  } catch (err) {
    console.error(err)
    // Lidando com erros de validação ou outros
    if (err.errors) {
      return res.status(400).json({ errors: err.errors})
    }
    res.status(500).json({ err: "Internal server error"})
  }
})

router.put('/change/:userid', async (req, res) => {
  try {
    // Pegar o ID do usuário pelo params
    let userId = req.params.userid

    //Pegar os dados selecionados para atualização
    let thingsToPut = updateUserSchema.parse(req.body)

    //Atualizando usuário
    const putedUser = await prisma.user.update({
      where: { id: parseInt(userId)},
      data: thingsToPut
    })

    //Retorno do usuário atualizadp
    res.status(200).json({ "Usuário atualizado:": putedUser})


  } catch (err) {
    //Exibe e retorna o erro
    console.log(err)
    res.sendStatus(400)
  }
})

// Rota para deletar um usuário
router.delete('/delete/:id', async (req, res) => {
  let { id } = req.params; // Pega o ID do usuário
  try {
    // Deleta o usuário com o ID passado
    const user = await prisma.user.delete({
      where: { id: Number(id) }, 
    });
    // Retorna o usuário deletado
    res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ error: 'Usuário não encontrado' });
  }
});

module.exports = router;
