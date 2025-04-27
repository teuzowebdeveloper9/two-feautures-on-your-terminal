import prompt from "prompt";

import {promptConfig} from "./prompts/prompt-main.js";

import {promptQrcodeConfig} from "./prompts/prompt-qr-code.js";

import chalk from "chalk";
import { handle } from "./utils/qrcode/handle.js";

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
  } else {
    console.log(chalk.greenBright("You have chosen password generator"));
  }
});  