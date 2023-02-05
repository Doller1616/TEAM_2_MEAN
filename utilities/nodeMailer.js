const nodemailer = require('nodemailer');
// try https://www.sendinblue.com/  (SMTP Server) better then Sendgrid
const sgTransport = require('nodemailer-sendgrid-transport');
var options = {
    auth: {
        //take it from sendinblue (https://www.sendinblue.com) abhardwaj1@kloudrac.com
        api_key: 'SG.9Xo...'
    }
}

const mailer = nodemailer.createTransport(sgTransport(options));

exports.sendMailTo = async (emailsArr, link) => {
    var email = {
        to: emailsArr,
        from: 'yadavajay900500@gmail.com', //registered Email on sendgrid
        subject: 'Verify Account',
        text: 'Account Authantication',
        html: `<a href=${link} >
         <button style="color: green"> Verify Account </button>
          </a>`
    };

    const result = new Promise((resolve, reject) => {

        mailer.sendMail(email, function (err, res) {
            if (err) {
                reject(err)
            }
            resolve(res)
        });

    })

    return await result

}