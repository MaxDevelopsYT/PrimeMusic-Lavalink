

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1226876664580018176", ""], 
  mongodbUri : "mongodb + srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Springfield City Roleplay DJ",
      password: "sfcrp",
      host: "193.226.78.187",
      port:  9372,
      secure: false
    }
  ]
}
