const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "whfYTAALT#AgtpE2RDUQ_o_YWHiU9N3WOgpu3rsjq4AwGclRFIxgc",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/98XnsZL/20241008-150032.png",
ALIVE_MSG: process.env.ALIVE_IMG || "hi",
SUDO_NB: process.env.SUDO_NB || "94729787750",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "public",
AUTO_VOICE:"false"
};
