+++
title = "Contact"
description = "To reach us please use the contact form on this page."
path = "/en/contato"
template = "pages.html"
draft = false
+++

{{ m00main() }}
<div class="box">
<br>
<p style="text-align: center;">In person i offer technical support in São Paulo, Capital.
<br>
For remote assistance, service quotes or contracts, please use one of the following contact methods.</p>
<br>
</div>
<div class="box">
<h1 style="text-align: center;">E-mail</h1>
<br>
<p style="text-align: center;">
{{ m00mail() }}
</p>
<br>
<br>
</div>
<div class="box">
<h1 style="text-align: center;">WhatsApp</h1>
<br>
<p style="text-align:center">
{{ m00whatsapp() }}
</p>
<br>

{{ img(src="/icons/shared_qr_code.png" class="ci" alt="Chat on WhatsApp QR" w=150 h=150) }}
<br>
<br>
</div>
<div class="box">
<h1 align="center">LinkedIn</h1>
<br>
<p align="center">
{{ m00linkedin() }}
</p>
<br>
<br>
</div>
<div class="box">
<br>
<p align="center">Thank you for your visit, have a nice day.</p>
<br>
{{ img(src="/icons/ferris-happy.svg" class="ci" alt="Ferris is Happy" w="75" h="75") }}
<br>
</div>
{{ m00backtop() }}
