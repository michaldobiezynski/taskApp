const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "dobiezynski@gmail.com",
  from: "dobiezynski@gmail.com",
  subject: "This is my first creation",
  text: "I hope this one actually gets to you",
});
