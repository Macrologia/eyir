const fs = require("fs");

exports.welcomeNewMember = function(member) {
  
    const welcomeMessage = member.displayName + ", welcome to **Skyhold**! Please go over the server rules in #welcome. Before asking a question, go over all of the available guides and resources in #guides-resources-faq; many frequently asked questions are answered there. Remember to check the Pinned Messages in each text channel for additional information. You can do so by clicking the Pin icon at the top right of your Discord window: <http://i.imgur.com/TuYQkjJ.png>. If you're unable to find an answer to your question or if you need clarification on something, please ask! That's what we're here for. :smile: We hope you enjoy your time in Skyhold!"

    member.createDM()
    .then(channel => {
        channel.send(welcomeMessage)
        console.log("Sent welcome message to " + member.displayName)
    });
}

exports.sass = function(msg) {
    if (msg.content.toLowerCase().includes("eyir") && msg.content.toLowerCase().includes("sucks")) {
        msg.channel.send("fuk u " + "<@" + msg.author.id + ">");
    }
}

exports.faqset = function(msg) {
    fs.readFile("./modules/faq.txt", "utf8", (err, data) => {
        msg.edit(data)
    });
}