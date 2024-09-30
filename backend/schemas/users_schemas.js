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

module.exports = userSchema;