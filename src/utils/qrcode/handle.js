import chalk from "chalk";
import QRCode from "qrcode-terminal";

export function handle (err, result) {
    if (err){
        console.error(chalk.red("Error getting input:"), err);
        return;
    }
    const isSmall = result.type == 1;
    QRCode.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.greenBright("QR code generated:\n"));
        console.log(qrcode);

    })
}