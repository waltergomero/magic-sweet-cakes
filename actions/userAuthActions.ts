"use server"

import { signUpSchema, signInSchema } from '../schemas/user-schema'
import type { SignUpFormData, SignInFormData } from '../schemas/user-schema'
import bcryptjs from "bcryptjs";

// Constants
const BCRYPT_SALT_ROUNDS = 12;
// Utility function for consistent password hashing
async function hashPassword(password: string): Promise<string> {
  const salt = await bcryptjs.genSalt(BCRYPT_SALT_ROUNDS);
  return bcryptjs.hash(password, salt);
}


export async function SignUpUserData(data: SignUpFormData) {
    const result = signUpSchema.safeParse(data)

    if (!result.success) {
        const errors: Record<string, string> = {}
        result.error.issues.forEach(err => {
            if (err.path.length > 0) {
                errors[String(err.path[0])] = err.message
                console.log("err", err.message)
            }
        })

        return { isValid: false, errors }
    }
    
      // Hash password and create user
    const hashedPassword = await hashPassword(result.data.password);
    console.log("data", result)
    return { isValid: true, errors: {} }
}

export async function SignInUserData(data: SignInFormData) {
    const result = signInSchema.safeParse(data)
    if (!result.success) {
        const errors: Record<string, string> = {}
        result.error.issues.forEach(err => {
            if (err.path.length > 0) {
                errors[String(err.path[0])] = err.message
            }
        })
        return { isValid: false, errors }
    }
    return { isValid: true, errors: {} }
}