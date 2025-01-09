const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "karimchebbion@gmail.com",
    pass: "ybxw zgrm mswa ejcm ",
  },
});

let mailOptions = {
  from: "karimchebbion@gmail.com",
  to: "aymen.amd@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Hello That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
