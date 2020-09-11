const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

// sgMail.send({
//   to: "dobiezynski@gmail.com",
//   from: "dobiezynski@gmail.com",
//   subject: "This is my first creation",
//   text: "I hope this one actually gets to you",
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "dobiezynski@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};
const sendDeleteEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "dobiezynski@gmail.com",
    subject: "Sorry to see you go!",
    text:
      `Hi ${name}, I was wondering why you deleted your account and if there is` +
      ` anything I could do to keep you`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendDeleteEmail,
};
