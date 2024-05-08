import { SECRET_TOKEN } from '../config.js';
import { uploadUserImage } from '../libs/cloudinary.js';
import { createAccessToken } from '../libs/jwt.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import fs from 'fs-extra'
export const register = async (req, res) => {

    const { name, identification, typeIdentification, phone, address, username, email, password, role } = req.body

    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            name,
            typeIdentification,
            identification,
            phone,
            address,
            username,
            email,
            role,
            password: passwordHash
        })
        const userSaved = await newUser.save()
        const token = await createAccessToken({ id: userSaved._id })
        res.cookie("token", token, {

        })
        res.json({
            id: userSaved._id,
            name: userSaved.name,
            typeIdentification: userSaved.typeIdentification,
            identification: userSaved.identification,
            phone: userSaved.phone,
            address: userSaved.address,
            username: userSaved.username,
            email: userSaved.email,
            role: userSaved.role,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        })


    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const login = async (req, res) => {

    const { email, password } = req.body

    try {
        const userFound = await User.findOne({ email })
        if (!userFound) return res.status(400).json({ message: 'Credenciales invalidas' })

        const isMatch = await bcrypt.compare(password, userFound.password)
        if (!isMatch) return res.status(400).json({ message: 'Credenciales invalidas' })

        const token = await createAccessToken({ id: userFound._id })
        res.cookie("token", token, {
            httpOnly: false,
            secure: false
        });//establece la respuesta en una cooKie
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,

        })


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const logout = (req, res) => {
    res.cookie("token", "", { expires: new Date(0) });
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if (!userFound) return res.status(404).json({ message: "user not found" })

    res.status(200).json(userFound);

}
//get all user --admin

export const getAllUser = async (req, res) => {

    const user = await User.find()

    res.status(200).json(user)

}
/*

vooyy por aqui
export const getIngleUser = async(req,res)=>{
 
    const user = await User.find()

    res.status(200).json(user)

}
*/


///update  role user

export const updateUserRole = async (req, res) => {
    const userUpdate = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    };

    const user = await User.findByIdAndUpdate(req.params.id, userUpdate, {
        new: true
    });

    if (!user) return res.status(404).json({ message: " user not updated" })
    res.status(200).json(user)
}


//delete user --admin
export const deleteUser = async (req, res) => {

    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: ' user not found' })
    return res.sendStatus(204)
};




export const verifyToken = async (req, res) => {


    try {
        const { token } = req.cookies
        console.log(token)

        if (!token) return res.status(401).json({ message: "Usuario no autorizado" });

        jwt.verify(token, SECRET_TOKEN, async (err, decoded) => {



            try {


                if (err) return res.status(err).json({ message: "No autorizado" });

                const userFound = await User.findById(decoded.id);
                console.log(userFound)
                return res.json(userFound);


            } catch (err) {

                // if (err.name === 'TokenExpiredError') {
                //     return res.status(401).json({ message: 'Token expirado' });

                // }
                if (jwt.TokenExpiredError) {

                    res.status(400).json({ message: "Vuelve a iniciar sesión" });

                }


                console.log(err)

            }




        })
    } catch (error) {

        console.log(error)

        return
    }
}


export const updateUserData = async (req, res) => {
    try {

        const { name, identification, typeIdentification, phone, address, username, email, password } = req.body

        const userFound = await User.findById(req.user.id)
        if (!userFound) return res.status(404).json({ message: "No se encontró el usuario" });

        if (name && name === userFound.name) {
            return res.status(400).json({ message: "Los nombres ingresados son iguales al actual." });
        }
        if (identification && identification === userFound.identification) {
            return res.status(400).json({ message: "El número de identificación es igual al anterior" });
        }

        if (phone && phone === userFound.phone) {
            return res.status(400).json({ message: "El número de teléfono es igual al anterior" });
        }

        if (address && address === userFound.address) {
            return res.status(400).json({ message: "La dirección es igual a la anterior" });
        }

        if (username && username === userFound.username) {
            return res.status(400).json({ message: "El nombre de usuario es igual al anterior" });
        }

        if (email) {
            const foundEmail = await User.findOne({ email })
            if (foundEmail) return res.status(400).json({ message: "El correo eléctronico ya existe" });
        }

        if (email && email === userFound.email) {
            return res.status(400).json({ message: "El correo eléctronico es igual al anterior." });
        }


        if (password && password.length < 6) {
            return res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres." })
        }

        if (email && !/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            return res.status(400).json({ message: "La dirección de correo no es válida" });
        }


        if (password) {

            const passwordCrypt = await bcrypt.compare(password, userFound.password);

            if (passwordCrypt) {
                return res.status(400).json({ message: "La contraseña ingresada es igual al actual." });
            }

        }
        let passwordHash;

        if (password) {
            passwordHash = await bcrypt.hash(password, 10)

        }


        const campos = {}
        if (name) campos.name = name
        if (identification) campos.identification = identification
        if (phone) campos.phone = phone
        if (address) campos.address = address

        if (username) campos.username = username
        if (email) campos.email = email
        if (password) campos.password = passwordHash


        //console.log(campos, "estos son los campos")



        //   if (Object.keys(campos).length === 0) {
        //        return res.status(400).json({ message: "Debes actualizar al menos un campo " })
        //    }

                if (req.files?.image) {
               const response = await uploadUserImage(req.files.image.tempFilePath)

            userFound.images = {
                   url: response.secure_url
           }

                await fs.remove(req.files.image.tempFilePath)
                await userFound.save();

 }


        const userUpdate = await User.findByIdAndUpdate(req.user.id, campos, {
            new: true
        })
        if (!userUpdate) return res.status(404).json({ message: "No se actualizó el usuario" })

        return res.status(200).json(userUpdate)


    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}

export const adminEditUserData = async (req, res) => {
    try {
        const { id } = req.params
        const idTrim = id.trim()
        const { name, identification, typeIdentification, phone, address, username, email, password } = req.body
        const userFound = await User.findById(req.user.id)
        if (!userFound) return res.status(404).json({ message: "No se encontró el usuario" });

        if (name === userFound.name) {
            return res.status(400).json({ message: "Los nombres ingresados son iguales al actual." });
        }
        if (identification === userFound.identification) {
            return res.status(400).json({ message: "El número de identificación es igual al anterior" });
        }

        if (phone === userFound.phone) {
            return res.status(400).json({ message: "El número de teléfono es igual al anterior" });
        }

        if (address === userFound.address) {
            return res.status(400).json({ message: "La dirección es igual a la anterior" });
        }

        if (username === userFound.username) {
            return res.status(400).json({ message: "El nombre de usuario es igual al anterior" });
        }

        if (email) {
            const foundEmail = await User.findOne({ email })
            if (foundEmail) return res.status(400).json({ message: "El correo eléctronico ya existe" });
        }

        if (email === userFound.email) {
            return res.status(400).json({ message: "El correo eléctronico es igual al anterior." });
        }

        if (await bcrypt.compare(password, userFound.password)) {
            return res.status(400).json({ message: "La contraseña ingresada es igual al actual." });
        }

        if (password && password.length < 6) {
            return res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres." })
        }

        if (email && !/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            return res.status(400).json({ message: "La dirección de correo no es válida" });
        }


        const passwordCrypt = await bcrypt.compare(password, userFound.password);

        if (passwordCrypt) {
            return res.status(400).json({ message: "La contraseña ingresada es igual al actual." });
        }

        let passwordHash;

        if (password) {
            passwordHash = await bcrypt.hash(password, 10)

        }



        const campos = {}
        if (name) campos.name = name
        if (identification) campos.identification = identification
        if (phone) campos.phone = phone
        if (address) campos.address = address



        if (username) campos.username = username
        if (email) campos.email = email
        if (password) campos.password = passwordHash
        console.log(campos, "estos son los campos")



        if (Object.keys(campos).length === 0) {
            return res.status(400).json({ message: "Debes actualizar al menos un campo " })
        }



        const userUpdate = await User.findByIdAndUpdate(idTrim, campos, {
            new: true
        })
        if (!userUpdate) return res.status(404).json({ message: "No se actualizó el usuario" })

        return res.status(200).json(userUpdate)



    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}