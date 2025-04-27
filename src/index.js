import prompt from "prompt";

import {promptConfig} from "./prompts/prompt-main.js";
import chalk from "chalk";

prompt.start();

prompt.get(promptConfig, (err, choose) => {
  if (err) {
    console.error("Erro ao obter entrada:", err);
    return;
  }
  if (choose.prompt == 1) {
    console.log(chalk.greenBright("You have chosen QR code generator"));
  } else {
    console.log(chalk.greenBright("You have chosen password generator"));
  }
});  