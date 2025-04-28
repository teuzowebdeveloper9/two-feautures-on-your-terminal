import prompt from "prompt";
import {promptQrcodeConfig} from "../../prompts/prompt-qr-code.js";
import { handle } from "./handle.js";



export async function createQrCode(){
    prompt.get(promptQrcodeConfig, handle());

    prompt.start();
}