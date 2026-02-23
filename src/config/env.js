import dotenv from "dotenv";


dotenv.config();

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required enviroment variable: ${name}`);
  }
  return value;
}



export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: Number(requireEnv("PORT")),
  DATABASE_HOST:String(requireEnv("DATABASE_HOST")),
  DATABASE_USER:String(requireEnv("DATABASE_USER")),
  DATABASE_PASSWORD:String(requireEnv("DATABASE_PASSWORD")),
  DATABASE_NAME:String(requireEnv("DATABASE_NAME"))
};
