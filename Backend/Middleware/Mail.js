var nodemailer = require('nodemailer');
const Mail=(to,event)=>{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Prashant.teachies@gmail.com',
    pass: 'jqljmqcdiotionzw'
  },
  pool:true
});

var mailOptions = {
  from: 'prashant.teachies@gmail.com',
  to: to,
  subject: 'thanks for registration',
  text: `{Thank you for registring in ${event}}`,
  attachment:{
    filename:"RuleBook",
    path:'./Rule_Book.pdf'
  }
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    // console.log(error);
    
  } else {
    // console.log('Email sent: ' + info.response);
  }
});
}

module.exports ={Mail}