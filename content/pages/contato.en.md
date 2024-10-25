+++
title = "Contact"
description = "To reach us please use the contact form on this page."
path = "/en/contato"
template = "pages.html"
draft = false
+++

{{ m00main() }}

<br>
<p align="center">In person I offer technical assistance in Sao Paulo (Capital)</p>
<p align="center">For remote work, service quotes or contracts, please use one of the following contact methods:</p>
<br>
<br>
<h1 align="center">E-mail</h1>
<br>
<br>
<p align="center">
{{ m00mail() }}
</p>
<br>
<br>
<h1 align="center">WhatsApp</h1>
<br>
<br>
<p style="text-align:center">
{{ m00whatsapp() }}
</p>
<br>

{{ img(src="/icons/shared_qr_code.png" class="ci" alt="Chat on WhatsApp QR" w=150 h=150) }}
<br>
<br>
<h1 align="center">LinkedIn</h1>
<br>
<br>
<p align="center">
{{ m00linkedin() }}
</p>
<br>
<br>

{{ img(src="/icons/ferris-happy.svg" class="ci" alt="Ferris is Happy" w="75" h="75") }}

<p align="center">Thank you for your visit, have a nice day.</p>

{{ m00backtop() }}
