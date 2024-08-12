+++
title = "Contact"
description = "To reach us please use the contact form on this page."
path = "contact"
template = "pages.html"
draft = false
+++
<p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
<p>Location</p>
<p>Send me an E-Mail</p>
<p>Call me on Whatsapp</p>

<a aria-label="Chat on WhatsApp" href="https://wa.me/5511933014430"> <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" />
<a />

{{ img(src="icons/ferris-happy.svg" class="ci" alt="Ferris is Happy") }}
{{ img(src="/static/icons/ChatOnWhatsAppButton/WhatsAppButtonGreenLarge.svg" class="ci" alt="nnn") }}

<form name="contact" method="POST">
  <p>
    <label for="name">Name</label>
    <input type="text" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
  </p>
  <p>
    <label for="email">Email Address</label>
    <input type="email" placeholder="name@example.com" id="email" required data-validation-required-message="Please enter your email address." />
  </p>
  <p>
    <label for="message">Message</label>
    <textarea rows="5" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
  </p>
  <div id="success"></div>
  <p>
    <button type="submit" id="sendMessageButton">Send</button>
  </p>
</form>
