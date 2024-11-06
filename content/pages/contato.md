+++
title = "Contato"
description = "Para entrar en contato conmigo, utilize um dos links nesta página."
path = "/contato"
template = "pages.html"
draft = false
+++

{{ m00main() }}

<div class="box">
<br>
<p style="text-align: center;">Pessoalmente ofereço assistência técnica em São Paulo, Capital.
<br>Para assistência remota, orçamento de serviços ou contratações, utilize um dos seguintes meios de contato.</p>
<br>
</div>
<div class="box">
<h1 style="text-align: center;">E-mail</h1>
<p style="text-align: center;">
<br>
{{ m00mail()  }}
<br>
<br>
</p>
</div>
<div class="box">
<h1 style="text-align: center;">WhatsApp</h1>
<br>
<p style="text-align: center;">
{{ m00whatsapp() }}
</p>
<br>
{{ img(src="/icons/shared_qr_code.png" class="ci" alt="Chat on WhatsApp QR" w=150 h=150) }}
<br>
<br>
</div>
<div class="box">
<h1 style="text-align: center;">LinkedIn</h1>
<br>
<p style="text-align: center;">
{{ m00linkedin() }}
</p>
<br>
<br>
</div>
<div class="box">
<br>
<p style="text-align: center;">Obrigado, pela visita, até já.</p>
<br>
{{ img(src="/icons/ferris-happy.svg" class="ci" alt="Ferris is Happy" w="75" h="75") }}
<br>
</div>
{{ m00backtop() }}
