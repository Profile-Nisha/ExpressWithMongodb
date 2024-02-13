const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection is successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  
}

let allchats = [
    {
        from: "nisha",
        to: "Akshay",
        message: "send me your number",
        created_at: new Date(), 
    },
    {
        from: "seeta",
        to: "khushbu",
        message: "suggest me some hints",
        created_at: new Date(),
    },
    {
      from: "sinnu",
      to: "priya",
      message: "looking very preety",
      created_at: new Date(),
    },
    {
        from: "shristi",
    to: "kriti",
    message: "can we meet today",
    created_at: new Date(),
    }
]

Chat.insertMany(allchats);