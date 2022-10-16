require("dotenv").config();
const express = require("express");
const nodeMail = require("nodemailer");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

async function mainMail(name, email, subject, message) {
  const transporter = await nodeMail.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.PASSWORD,
    },
  });
  const mailOption = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: subject,
    html: `<br><br>Du hast eine neue Nachricht von: <br><br>
    Email: ${email}
    <br><br>Name: ${name}
    <br><br>Message: ${message}`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Nachricht abgeschickt");
  } catch (error) {
    return Promise.reject(error);
  }
}

app.get("/home", (req, res) => {
  res.render(index.html);
});

app.post("/home", async (req, res, next) => {
  const { yourname, youremail, yoursubject, yourmessage } = req.body;
  try {
    await mainMail(yourname, youremail, yoursubject, yourmessage);

    setTimeout(function(){
      return;
    }, 10000)
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running!"));