function updateButton(selectedValue) {
    document.getElementById('dropdownMenuButton').textContent = selectedValue;
}


function mostrarCartas() {
    var numeroStr = document.getElementById('ncarta').value; // Obtener el valor como cadena
    var numero = parseInt(numeroStr, 10); // Convertir la cadena a un número entero
    var palo = document.getElementById('dropdownMenuButton').textContent; // Obtener el contenido del elemento


    var elementoOculto1 = document.getElementById('oculto1');
    var elementoOculto2 = document.getElementById('oculto2');
    var elementoOculto3 = document.getElementById('oculto3');

    if (elementoOculto1.style.display === 'none') {
        elementoOculto1.style.display = 'block';
    } else {
        elementoOculto.style.display = 'none';
    }
    if (elementoOculto2.style.display === 'none') {
        elementoOculto2.style.display = 'block';
    } else {
        elementoOculto2.style.display = 'none';
    }
    if (elementoOculto3.style.display === 'none') {
        elementoOculto3.style.display = 'block';
    } else {
        elementoOculto3.style.display = 'none';
    }


    if (!isNaN(numero) && numero > 0 && numero < 13 && numero !== 8 && numero !== 9) {

        //crea la Muetsra
        var muetsra = document.createElement("h3");
        muetsra.textContent = "Muestra:";
        var muestraImg = document.createElement("img");

        var divmuestra = document.getElementById("muestra"); // Obtener el elemento div existente donde deseas adjuntar el nuevo párrafo
        divmuestra.appendChild(muetsra);// Adjuntar el nuevo párrafo al elemento div existente




        //Crea la muestra 
        var urlImagen = '../img/' + palo + '/' + palo + numero + '.png';
        console.log(urlImagen)
        muestraImg.src = urlImagen;
        muestraImg.classList.add('img-fluid');
        divmuestra.appendChild(muestraImg);

        //Crea LAS MUESTRAS
        var las_muestras = document.createElement("h3");
        las_muestras.textContent = "Las muestras son:";

        var div_las_muestras = document.getElementById("las_muestras"); // Obtener el elemento div existente donde deseas adjuntar el nuevo párrafo
        div_las_muestras.appendChild(las_muestras);// Adjuntar el nuevo párrafo al elemento div existente


        var muestra1_img = document.createElement("img");
        var muestra2_img = document.createElement("img");
        var muestra3_img = document.createElement("img");
        var muestra4_img = document.createElement("img");
        var muestra5_img = document.createElement("img");


        if (numero == 2) {
            muestra1_img.src = '../img/' + palo + '/' + palo + 12 + '.png';
            muestra2_img.src = '../img/' + palo + '/' + palo + 4 + '.png';
            muestra3_img.src = '../img/' + palo + '/' + palo + 5 + '.png';
            muestra4_img.src = '../img/' + palo + '/' + palo + 11 + '.png';
            muestra5_img.src = '../img/' + palo + '/' + palo + 10 + '.png';
        } else if (numero == 4) {
            muestra1_img.src = '../img/' + palo + '/' + palo + 2 + '.png';
            muestra2_img.src = '../img/' + palo + '/' + palo + 12 + '.png';
            muestra3_img.src = '../img/' + palo + '/' + palo + 5 + '.png';
            muestra4_img.src = '../img/' + palo + '/' + palo + 11 + '.png';
            muestra5_img.src = '../img/' + palo + '/' + palo + 10 + '.png';
        } else if (numero == 5) {
            muestra1_img.src = '../img/' + palo + '/' + palo + 2 + '.png';
            muestra2_img.src = '../img/' + palo + '/' + palo + 4 + '.png';
            muestra3_img.src = '../img/' + palo + '/' + palo + 12 + '.png';
            muestra4_img.src = '../img/' + palo + '/' + palo + 11 + '.png';
            muestra5_img.src = '../img/' + palo + '/' + palo + 10 + '.png';
        } else if (numero == 11) {
            muestra1_img.src = '../img/' + palo + '/' + palo + 2 + '.png';
            muestra2_img.src = '../img/' + palo + '/' + palo + 4 + '.png';
            muestra3_img.src = '../img/' + palo + '/' + palo + 5 + '.png';
            muestra4_img.src = '../img/' + palo + '/' + palo + 12 + '.png';
            muestra5_img.src = '../img/' + palo + '/' + palo + 10 + '.png';
        } else if (numero == 10) {
            muestra1_img.src = '../img/' + palo + '/' + palo + 2 + '.png';
            muestra2_img.src = '../img/' + palo + '/' + palo + 4 + '.png';
            muestra3_img.src = '../img/' + palo + '/' + palo + 5 + '.png';
            muestra4_img.src = '../img/' + palo + '/' + palo + 11 + '.png';
            muestra5_img.src = '../img/' + palo + '/' + palo + 12 + '.png';
        } else {
            muestra1_img.src = '../img/' + palo + '/' + palo + 2 + '.png';
            muestra2_img.src = '../img/' + palo + '/' + palo + 4 + '.png';
            muestra3_img.src = '../img/' + palo + '/' + palo + 5 + '.png';
            muestra4_img.src = '../img/' + palo + '/' + palo + 11 + '.png';
            muestra5_img.src = '../img/' + palo + '/' + palo + 10 + '.png';
        }


        var divmuestra1 = document.getElementById("muestra1");
        divmuestra1.appendChild(muestra1_img);

        var divmuestra2 = document.getElementById("muestra2");
        divmuestra2.appendChild(muestra2_img);

        var divmuestra3 = document.getElementById("muestra3");
        divmuestra3.appendChild(muestra3_img);

        var divmuestra4 = document.getElementById("muestra4");
        divmuestra4.appendChild(muestra4_img);

        var divmuestra5 = document.getElementById("muestra5");
        divmuestra5.appendChild(muestra5_img);

        if (palo == 'Basto') {








        }
    } else {
        alert("Número inválido");
    }
}


