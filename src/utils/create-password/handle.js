import chalk from "chalk";
import dotenv from "dotenv";

export async function createPassword() {
    let characters = [];
    let password = "";
    let passwordLength = 15;

   

    if (process.env.UPPERCASE_LETTERS = "true") {
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (process.env.LOWERCASE_LETTERS = "true") {
        characters.push(..."abcdefghijklmnopqrstuvwxyz");
    }
    if (process.env.NUMBERS = "true") {
        characters.push(..."0123456789");
    }
    if (process.env.SPECIAL_CHARACTERS = "true") {
        characters.push(..."!@#$%^&*()_+[]{}|;':,.<>?");
    }
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
   
    return  password;
}