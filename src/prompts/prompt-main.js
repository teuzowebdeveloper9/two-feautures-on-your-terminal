import chalk from "chalk";


export const promptConfig = [
    {
        name: "prompt",
        description: chalk.greenBright.bold("welcome to my project  choose a tool (1 qr code generator or (2 PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Please enter a number between 1 and 2"),
        required: true,

    }
]

