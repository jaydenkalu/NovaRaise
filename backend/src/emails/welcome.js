const { renderLayout, heading, paragraph, table } = require("./layout");

function build({ name, walletPublicKey }) {
  const recipientName = name || "there";
  const subject = "Welcome to NovaRaise";

  const text = [
    `Hi ${recipientName},`,
    "",
    "Welcome to NovaRaise! Your account is ready.",
    "",
    `Your custodial wallet public key: ${walletPublicKey}`,
    "",
    "You can now browse campaigns, contribute, or launch your own.",
  ].join("\n");

  const html = renderLayout({
    previewText: "Welcome to NovaRaise — your account is ready.",
    bodyHtml: [
      heading(`Welcome, ${recipientName}!`),
      paragraph("Your NovaRaise account is ready. You can now browse campaigns, contribute, or launch your own."),
      table([["Wallet public key", walletPublicKey]]),
      paragraph("Thanks for joining NovaRaise."),
    ].join(""),
  });

  return { subject, text, html };
}

module.exports = { build };
