const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))
// Routes
server.post("/submit", (req, res) => {
    const { number1, adjective1, name, animals, nouns1, ingVerb, nouns2, adjective2, adjective3, noun1, location, noun2 } = req.body;

    // Validate if all fields are filled
    if (!number1 || !adjective1 || !name || !animals || !nouns1 || !ingVerb || !nouns2 || !adjective2 || !adjective3 || !noun1 || !location || !noun2) {
        res.send(`
            <h1>Submission Failed</h1>
            <p>Please fill out ALL fields</p>
            <a href="index.html">Go Back to Form</a>
        `);
        return;
    }

    // Construct the mad lib story
    const madLib = `
        Yesterday, me and ${number1} of my friends took a trip to the mall.
        While we were there we saw this really ${adjective1} store called ${name}'s Pets.
        We saw ${animals} and ${nouns1} ${ingVerb} in the store display.
        So we had to go inside. They had miniature ${nouns2} and ${adjective2} little bunnies.
        We even got to play with the ${adjective3} ${noun1} in the ${location}.
        I want a/an ${noun2} so much!
    `;

    // Send the filled mad lib story as response
    res.send(`
        <h1>Submission Successful</h1>
        <p>${madLib}</p>
        <a href="/">Go Back to Form</a>
    `);
});

server.get('public/ITC505/lab-7/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))
// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 80
if (process.argv[2] === 'local') {
  port = 8080
}
server.listen(port, () => console.log('Ready on localhost!'))