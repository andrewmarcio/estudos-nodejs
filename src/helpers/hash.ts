import {hash} from "bcrypt"

export async function bcrypt(value: string): Promise<string>{
    const saltRounds = 10;
    const encryptedString = await hash(value, saltRounds);
    return encryptedString;
}