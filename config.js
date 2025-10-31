const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~5RRGAb7D#BXLct3y91jOBzgLqjfcTKq4X4SfiU4JSgfZXT2ttdA8'
};
