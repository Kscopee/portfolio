// ===== EMAIL SENDER LOGIC =====
document.addEventListener("DOMContentLoaded", function () {
  // initialize EmailJS with your public key
  emailjs.init("G2P_85WXNra-Q-jj0");

  const emailModal = new bootstrap.Modal(document.getElementById("emailModal"));
  const connectButton = document.querySelector(".connect-button");
  const sendMessageBtn = document.getElementById("sendMessageBtn");
  const emailForm = document.getElementById("emailForm");

  // show modal when connect button is clicked
  connectButton.addEventListener("click", function () {
    emailModal.show();
  });

  // handle send message button click
  sendMessageBtn.addEventListener("click", async function () {
    const senderEmail = document.getElementById("senderEmail").value;
    const messageContent = document.getElementById("messageContent").value;

    if (!senderEmail || !messageContent) {
      alert("Please fill in all fields");
      return;
    }

    // disable button and show loading state
    sendMessageBtn.disabled = true;
    sendMessageBtn.textContent = "Sending... (o_ _)ﾉ彡☆";

    try {
      // send email using EmailJS
      await emailjs.send("service_usctl47", "template_e6fsk3h", {
        from_email: senderEmail,
        message: messageContent,
        to_email: "projectkfiles@gmail.com",
      });

      // show success message
      alert("Message sent successfully!");

      // Close modal and reset form
      emailModal.hide();
      emailForm.reset();
    } catch (error) {
      // show error message
      alert("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    } finally {
      // re-enable button
      sendMessageBtn.disabled = false;
      sendMessageBtn.textContent = "Send Message";
    }
  });
});


