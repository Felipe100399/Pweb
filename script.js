function calcularIMC () {
  
  
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
  
    if (isNaN(edad) || isNaN(peso) || isNaN(altura) || altura <= 0) {
      alert("Por favor completa correctamente todos los campos.");
      return;
    }
  
    let imc = peso / (altura * altura);
    let condicion = "";
  
    if (imc < 18.5) {
      condicion = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      condicion = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      condicion = "Sobrepeso";
    } else {
      condicion = "Obesidad";
    }
  
    alert(`su nombre es ${nombre}, su edad es ${edad}, su altura es ${altura}, su imc es ${imc}, y su condicion es ${condicion}.`);
    
        
    
    }
