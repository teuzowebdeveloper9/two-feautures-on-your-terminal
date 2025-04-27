import chalk from "chalk";

export const promptQrcodeConfig = [
    {
     name: "link",
     description: chalk.bgGreenBright.bold("Enter the link you want to generate a QR code for"),        
    },
    {
        name: "type",
        description: chalk.bgGreenBright.bold("choose between type (1 terminal qr code or (2 normal"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Please enter a number between 1 and 2"),
        required: true,
    }
]