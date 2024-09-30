const express = require('express');
const router = express.Router();
const userSchema = require('../schemas/users_schemas')

const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const prisma = new PrismaClient()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

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
          ? new Date (parseData.dateOfBirth)
          : null,
      }
    })

    // Retornar o usuário por JSON (Sem a senha)
    const { password, ...userWithoutPassword} = aNewUser
    res.status(201).json({ "Novo usuário criado:": aNewUser})
  } catch (err) {

    // Lidando com erros de validação ou outros
    if (err.errors) {
      return res.status(400).json({ errors: err.errors})
    }
    res.status(500).json({ err: "Internal server error"})
  }
})

module.exports = router;
