document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573013332993";

  let cliente = document.querySelector("#cliente").value;
  let celular = document.querySelector("#celular").value;
  let fecha = document.querySelector("#fecha").value;
  let hora = document.querySelector("#hora").value;
  let ubicacion = document.querySelector("#ubicacion").value;
  let ciudad = document.querySelector("#ciudad").value;
  let dinero = document.querySelector("#dinero").value;
  let salchipapauno = document.querySelector("#salchipapauno").value;
  let desgranadosuno = document.querySelector("#desgranadosuno").value;
  let picadasuno = document.querySelector("#picadasuno").value;
  let pataconesuno = document.querySelector("#pataconesuno").value;
  let perrosuno = document.querySelector("#perrosuno").vvalue
  let hamburguesasuno = document.querySelector("#hamburguesasuno").value;
  let sandwichsuno = document.querySelector("#sandwichsuno").value;
  let bebidasuno = document.querySelector("#bebidasuno").value;
  let adicionalesuno = document.querySelector("#adicionalesuno").value;
  let salchipapados = document.querySelector("#salchipapados").value;
  let desgranadosdos = document.querySelector("#desgranadosdos").value;
  let picadasdos = document.querySelector("#picadasdos").value;
  let pataconesdos = document.querySelector("#pataconesdos").value;
  let perrosdos = document.querySelector("#perrosdos").vvalue
  let hamburguesasdos = document.querySelector("#hamburguesasdos").value;
  let sandwichsdos = document.querySelector("#sandwichsdos").value;
  let bebidasdos = document.querySelector("#bebidasdos").value;
  let adicionalesdos = document.querySelector("#adicionalesdos").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
                 *_🔻Boca's © Fast Food_*🔻%0A
         *_Datos del cliente_*%0A%0A%0A
	 *_Nombre del cliente_*: ${cliente}%0A
	 *_Numero de celular_*: ${celular}%0A
	 *_Fecha del pedido_*: ${fecha}%0A
	 *_Hora del pedido_*: ${hora}%0A
	 *_Ubicación exacta_*: ${ubicacion}%0A
	 *_Ciudad_*: ${ciudad}%0A
	 *_Tipo de pago_*: ${dinero}%0A%0A
	 ------------------------------------------------
                    *PEDIDO 01*%0A%0A
   *_Salchipapas_*: _${salchipapauno}_%0A
   *_Desgranados_*: _${desgranadosuno}_%0A
   *_Picadas_*: _${picadasuno}_%0A
   *_Patacones_*: _${pataconesuno}_%0A
   *_Perros calientes_*: _${perrosuno}_%0A
   *_Hamburguesas_*: _${hamburguesasuno}_%0A
   *_Sandwichs_*: _${sandwichsuno}_%0A
   *_Bebidas heladas_*: _${bebidasuno}_%0A
   *_Adicionales_*: _${adicionalesuno}_%0A%0A
		-----------------------------------------------
                    *PEDIDO 02*%0A%0A
   *_Salchipapas_*: _${salchipapados}_%0A
   *_Desgranados_*: _${desgranadosdos}_%0A
   *_Picadas_*: _${picadasdos}_%0A
   *_Patacones_*: _${pataconesdos}_%0A
   *_Perros calientes_*: _${perrosdos}_%0A
   *_Hamburguesas_*: _${hamburguesasdos}_%0A
   *_Sandwichs_*: _${sandwichsdos}_%0A
   *_Bebidas heladas_*: _${bebidasdos}_%0A
   *_Adicionales_*: _${adicionalesdos}_%0A%0A`;

  if (cliente === "" || celular === "" || fecha === "" || hora === "" || salchipapauno === "" || desgranadosuno === "" || picadasuno === "" || perrosuno === "" || pataconesuno === "" || hamburguesasuno === "" || sandwichsuno === "" || bebidasuno === "" || adicionalesuno === "" || salchipapados === ""|| desgranadosdos === "" || picadasdos === "" || perrosdos === "" || pataconesdos === "" || perrosdos === "" || hamburguesasdos === "" || sandwichsdos === "" || bebidasdos === "" || adicionalesdos === "" || ciudad === "" || dinero === "" ) {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
