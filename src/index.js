import prompt from "prompt";
import dotenv from "dotenv";
import {promptConfig} from "./prompts/prompt-main.js";
import { callPassword } from "./utils/create-password/create.js";
import chalk from "chalk";
import { handle } from "./utils/qrcode/handle.js";
import { promptQrcodeConfig } from "./prompts/prompt-qr-code.js";

prompt.start();

prompt.get(promptConfig, (err, choose) => {
  if (err) {
    console.error("Erro ao obter entrada:", err);
    return;
  }
  if (choose.prompt == 1) {
    console.log(chalk.greenBright("You have chosen QR code generator"));
    prompt.get(promptQrcodeConfig, (err, result) => {
      handle(err, result);
    });
  } else if (choose.prompt == 2) {
    console.log(chalk.greenBright("You have chosen password generator"));
    callPassword();
  }
});

