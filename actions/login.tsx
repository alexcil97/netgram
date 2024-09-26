"use server"

import { generateVerificationToken } from "@/data/token"
import { getUserByEmail } from "@/data/user"
import { LoginValidator } from "@/validations"
import bcrypt from "bcryptjs"

import * as z from "zod"

export const login = async (values: z.infer<typeof LoginValidator>, callbackUrl?: string | null) => {
    const validationsFields = LoginValidator.safeParse(values)

    if (!validationsFields.success) {
        return { error: "Revisa los campos" }
    }
    const { email, password, code } = validationsFields.data

    const existeUsuario = await getUserByEmail(email)

    if (!existeUsuario || !existeUsuario.email) {
        return { error: "Correo no existe" }
    }

    if (!existeUsuario.password) {
        return { error: "no hay password" }
    }

    const comprobarPassword = await bcrypt.compare(password, existeUsuario.password)

    if (!comprobarPassword) {
        return { error: "Password incorrecta" }
    }

    if (!existeUsuario.emailVerified) {
        const verificationToken = await generateVerificationToken(existeUsuario.email)

        //recuerda hacer el sendverification
    }




}