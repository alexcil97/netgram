export type User = {
    id: string
    nombre: string 
    apellido: string | null
    profile_picture : string | null
    role: string
    edad: string | null
    email: string
    password: string
    emailVerified : Date | null
    createdAt: Date | null
    isTwoFactorEnabled: boolean
}