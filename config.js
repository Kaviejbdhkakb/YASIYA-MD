const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~YV5lWTJS#DitbFu1j8zWAwbPL5j5_x4xb9bVscQWOAtYF5HI0BuQ'
};
