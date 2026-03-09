import bcrypt from "bcrypt";
import { User } from "../models/index.js";
import {signAccesToken} from "../utils/jwt.js"

const SALT_ROUNDS = 10;
export async function register({name,email, password}){
    const normalizeEmail = email.toLowerCase();
    const existing = await User.findOne({where: {user_email: normalizeEmail}});
    if (existing){
        return {ok: false, status: 409, error:"Email already registered"};
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await User.create({
        name,
        user_email: normalizeEmail,
        passwordHash
    });

    
}