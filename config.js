const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "wH5ixTxa#sx2cr5qZpW8PlFzkDnil2flVqsQa7UblDlCELKBRzv0",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/198a322e8cc0f2bd6cba2.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi Apex-MD Is Online Now 💻\n*💻 Owner* - Apex-MD\n\n*💻 Owner Number* -94765527900",
SUDO_NB: process.env.SUDO_NB || "94718913389",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
