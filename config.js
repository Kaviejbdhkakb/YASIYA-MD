const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~9NpDVB7R#TMwJGISbQKfFix_SDd9KPPEa5YvkW3PrM28QnD5TKcE'
};
