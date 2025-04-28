import chalk from "chalk";
import { createPassword } from "./handle.js";


export async function callPassword() {
    console.log(chalk.green("password generator"));
    await createPassword().then((password) => {
        console.log(chalk.greenBright(`your password is: ${password}`));
        console.log(chalk.greenBright("password generated successfully"));
    });
}
