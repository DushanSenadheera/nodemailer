const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@mail.com',
      pass: 'yourPassword'
    }
  });

const fname = 'firstName'
const lname = 'lastName'
const email = 'youremail@email.com'

const textContent = 'your email body content here';

const htmlContent = `
    <h1>User Details</h1>
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>${fname}</td>
        <td>${lname}</td>
        <td>${email}</td>
      </tr>
    </table>
  `
  
const mailOptions = {
  from: 'youremail@email.com',
  to: 'senderemail@email.com',
  subject: 'Sending an email using Node.js',
  // text: textContent,
  html: htmlContent,
attachments: [
  {
    filename: 'image.png',
    path: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  }
]
  };

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 

