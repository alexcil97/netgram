import { db } from "@/lib/db"

export const getVerificactionByToken = async (token: string) => {
    try {
        const verificacionToken = await db.verificationToken.findUnique({
            where: { token }
        })
        return verificacionToken
    } catch {
        return null
    }
}
export const getVerificactionTokenByEmail = async (email: string) => {
    try {
        const verificacionToken = await db.verificationToken.findFirst({
            where: { email }
        })
        return verificacionToken
    } catch {
        return null
    }
}