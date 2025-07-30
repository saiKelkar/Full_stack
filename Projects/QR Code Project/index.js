import { input } from "@inquirer/prompts";
import qr from "qr-image";
import fs from "fs";

const url = await input({ message: "Type in your URL" });

const qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream("qr_img.png"));

fs.writeFile("URL.txt", url, (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
});