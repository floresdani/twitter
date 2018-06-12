const boton = document.getElementById('btn');
boton.addEventListener('click', () => {
  //donde guardo el texto ingresado por el usuario
  let twitts = document.getElementById('twitt').value;

  //contenedor donde dejaré el texto ingreso por el usuario en html
  const cont = document.getElementById('cont');

  //crear un div contenedor
  const newTwitts = document.createElement('div');

  //nodos de texto del textarea
  let textNewTwitts = document.createTextNode(twitts);

  //definiendo parentesco en js
  const contenedorElemento = document.createElement('p');
  contenedorElemento.appendChild(textNewTwitts);
  newTwitts.appendChild(contenedorElemento);
  //definiendo parentesco en html
  cont.appendChild(newTwitts);

})