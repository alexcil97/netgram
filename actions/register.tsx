"use server"

import { getUserByEmail } from "@/data/user"
import { db } from "@/lib/db"
import { RegisterValidator } from "@/validations"
import bcrypt from "bcryptjs"

import * as z from "zod"

export const register = async (values: z.infer<typeof RegisterValidator>, callbackUrl?: string | null) => {
    const validationsFields = RegisterValidator.safeParse(values)

    if (!validationsFields.success) {
        return { error: "Revisa los campos" }
    }
    const { email, password, nombre, edad, apellido } = validationsFields.data
    const hashearPassword = await bcrypt.hash(password, 10)

    const existeUsuario = await getUserByEmail(email)

    if (existeUsuario) {
        return { error: "Este Correo ya ha sido usado" }
    }

    await db.user.create({
        data: {
            email,
            nombre,
            apellido,
            edad,
            password: hashearPassword
        }
    })

    const verificationToken = await gen




}