server.post("/submit", (req, res) => {
  const { number1, adjective1, name, animals, nouns, ingVerb, location, noun2 } = req.body;
  if (!number1 || !adjective1 || !name || !animals || !nouns || !ingVerb || !location || !noun2) {
    res.send(`
          <h1>Submission Failed</h1>
          <p>Please fill out ALL fields</p>
          <a href="/">Go Back to Form</a>
        `);
    return;
  }
  const madLib = `
    Yesterday, me and ${number1} of my friends took a trip to the mall.
    While we were there we saw this really ${adjective1} store called ${name}'s Pets.
    We saw ${animals} and ${nouns} ${ingVerb} in the store display.
    So we had to go inside. They had miniature ${nouns} and ${adjective1} little bunnies.
    We even got to play with the ${nouns} in the ${location}.
    I want a/an ${noun2} so much!
`;
  res.send(`
      <h1>Submission Successful</h1>
      <p>${madLib}</p>
      <a href="/">Go Back to Form</a>
    `);
});
