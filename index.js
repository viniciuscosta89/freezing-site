const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(PORT, () => {
  console.log(`We are live on port ${PORT}`);
});

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Detalhes do Contato</h3>
      <ul>
        <li>Nome: ${req.body.name}</li>
        <li>E-mail: ${req.body.email}</li>
      </ul>
      <h3>Mensagem:</h3>
        <p>${req.body.texto}</p>
    `

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'jayne73@ethereal.email',
        pass: 'VxYAruAzHDX6NumKFU'
      }
    });

    let mailOptions = {
      from: "test@testaccount.com",
      to: "jayne73@ethereal.email",
      replyTo: "test@testaccount.com",
      subject: "Novo contato",
      text: req.body.texto,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        res.send(err)
      } else {
        res.send('Success')
        console.log("Mensagem enviada: %s", info.messageId)
        console.log("Message URL: %s", nodemailer.getTestMessageUrl(info))
      }
      transporter.close();
    })
  })

})
