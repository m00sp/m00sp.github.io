+++
title = "Contacto"
description = "Para entrar en contacto conmigo, utilice los links de contacto en esta página."
path = "es/contato"
template = "pages.html"
draft = false
+++

{{ m00main() }}
<br>
<p align="center">Personalmente ofrezco asistencia técnica en San Pablo (Capital).</p>
<p style="text-align: center;">Para trabajo remoto, presupuesto de servicios o contrataciones utilice uno de los siguientes medios de contacto:</p>
<br>
<br>
<h1 style="text-align: center;">E-mail</h1>
<br>
<br>
<p style="text-align: center;">
{{ m00mail()  }}
</p>
<br>
<br>
<h1 style="text-align: center;">WhatsApp</h1>
<br>
<br>
<p style="text-align: center;">
{{ m00whatsapp() }}
</p>
<br>

{{ img(src="/icons/shared_qr_code.png" class="ci" alt="Chat on WhatsApp QR" w=150 h=150) }}
<br>
<br>

<h1 style="text-align: center;">LinkedIn</h1>
<br>
<br>
<p style="text-align: center;">
{{ m00linkedin() }}
</p>
<br>
<br>

{{ img(src="/icons/ferris-happy.svg" class="ci" alt="Ferris is Happy" w="75" h="75") }}

<p align="center">Gracias, por tu visita, hasta la próxima.</p>

{{ m00backtop() }}
