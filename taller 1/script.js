const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btnSumar = document.getElementById('sumar');
const resultado = document.getElementById('resultado');
const btnColores = document.getElementById('cambiarColores');

btnSumar.addEventListener('click', () => {
  // Convertir valores a números y sumar
  const suma = Number(num1.value) + Number(num2.value);
  resultado.textContent = suma;
});

btnColores.addEventListener('click', () => {
  const coloresFondo = ['white', 'lightblue', 'lightgreen', 'lightyellow', 'lightgray'];
  const coloresTexto = ['black', 'blue', 'green', 'red', 'purple'];

  const colorFondo = coloresFondo[Math.floor(Math.random() * coloresFondo.length)];
  const colorTexto = coloresTexto[Math.floor(Math.random() * coloresTexto.length)];

  document.body.style.backgroundColor = colorFondo;
  document.body.style.color = colorTexto;
});
