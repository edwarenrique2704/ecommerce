import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Nombre de usuario requerido",
  }),
  name:z.string({
    required_error:"Nombre requerido",
  }),
  email: z
    .string({
      required_error: "Correco electrónico requerido",
    })
    .email({
      message: "El correo electrónico no es válido",
    }),
  password: z
    .string({
      required_error: "Contraseña requerida",
    })
    .min(6, {
      message: "La contraseña debe ser de minimo 6 caracteres",
    }),
    identification:z.string({
        required_error:"Numero de identificación requerido",

    })
    .min(6,{
        message:"El número de identificación debe ser de minimo 6 caracteres"
    })
    .max(10,{
        message:"El nuemero de identifcación debe ser maximod de 10 caracteres"
    }),
    phone:z.string({
        required_error:"El teléfono es requerido"
    }).min(7,{
        message:"El número de teléfono debe ser de minimo 7 digitos"
    }),
    address:z.string({
        required_error:"La dirección es requerida"
    }),
    
    
});

export const loginSchema = z.object({
  email: z.string().email({
    message: "El correo electrónico no es válido",
  }),
  password: z.string().min(6, {
    message: "La contraseña ingresada debe ser de minimo 6 caracteres"
  }),
});