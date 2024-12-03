const { z } = require("zod");

const userSchema = z.object({
  name: z.string().min(1),
  username: z.string().min(1),
  lastName: z.string().min(1),
  password: z.string().min(6),
  email: z.string().email(),
  avatar: z.string().optional(),
  phone: z.string(),
  birthDate: z.string().optional(), 
});

const updateUserSchema = z.object({
  name: z.string().min(1).optional(),
  username: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  password: z.string().min(6).optional(),
  email: z.string().email().optional(),
  avatar: z.string().optional(),
  phone: z.string().optional(),
  birthDate: z.string().optional(), 
})

module.exports = userSchema;
module.exports = updateUserSchema;