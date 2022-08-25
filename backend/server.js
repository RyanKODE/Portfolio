const nodemailer = require('nodemailer');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const port = 3001;

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1e24296cf3b4e9",
      pass: "f57bfba328c920"
    }
});

app.post("/api/v1/email", async (req, res) => {
    const formInputs = req.body;

    const message = {
        from: formInputs.email,
        to: "1130ryank@gmail.com",
        subject: formInputs.subject,
        text: formInputs.message
    };

    transporter.sendMail(message, (err, info) => {
        if (err) return res.sendStatus(400);
        return res.sendStatus(200);
    });
});

app.listen(port, () => {
    console.log(`SERVER LISTENING ON PORT ${port}`);
});