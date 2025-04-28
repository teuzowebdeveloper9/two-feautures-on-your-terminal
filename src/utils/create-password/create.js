import chalk from "chalk";
import { createPassword } from "./handle.js";
import dotenv from "dotenv";

export async function callPassword() {
    console.log(chalk.green("password generator"));
    await createPassword().then((password) => {
        console.log(`your password is: ${password}`);
        console.log(chalk.greenBright("password generated successfully"));
    });
}
