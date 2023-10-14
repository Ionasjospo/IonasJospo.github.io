function updateButton1(selectedValue) {
    document.getElementById('dropdownMenuButton1').textContent = selectedValue;
}

function updateButton2(selectedValue) {
    document.getElementById('dropdownMenuButton2').textContent = selectedValue;
}

function updateButton3(selectedValue) {
    document.getElementById('dropdownMenuButton3').textContent = selectedValue;
}

function updateButton4(selectedValue) {
    document.getElementById('dropdownMenuButton4').textContent = selectedValue;
}

function calcularFlor() {
    var numerosInvalidos = [8, 9]
    var numeroMStr = document.getElementById('muestraNum').value;
    var num_muestra = parseInt(numeroMStr, 10);
    var palo_muestra = document.getElementById('dropdownMenuButton1').textContent;

    var numCarta1Str = document.getElementById('ncarta1').value;
    var num_c1 = parseInt(numCarta1Str, 10);
    var palo_c1 = document.getElementById('dropdownMenuButton2').textContent;

    var numCarta2Str = document.getElementById('ncarta2').value;
    var num_c2 = parseInt(numCarta2Str, 10);
    var palo_c2 = document.getElementById('dropdownMenuButton3').textContent;

    var numCarta3Str = document.getElementById('ncarta3').value;
    var num_c3 = parseInt(numCarta3Str, 10);
    var palo_c3 = document.getElementById('dropdownMenuButton4').textContent;

    var muestras = []
    var no_muestras = []
    var palos_no_muestras = []

    var posibles_muestras = [2, 4, 5, 10, 11];

    if (!numerosInvalidos.includes(num_muestra) && !numerosInvalidos.includes(num_c1) && !numerosInvalidos.includes(num_c2) &&
        !numerosInvalidos.includes(num_c3)) {
        if (noNulas(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3)) {
            if (distintasCartas(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3)) {

                //Si alguna muestra es 12, sustituye por el valor de la muestra_ronda
                if (num_c1 == 12 && palo_c1 == palo_muestra) {
                    num_c1 = num_muestra
                }
                if (num_c2 == 12 && palo_c2 == palo_muestra) {
                    num_c2 = num_muestra
                }
                if (num_c3 == 12 && palo_c3 == palo_muestra) {
                    num_c3 = num_muestra
                }

                //Identifica las muestras y las que no.
                if (posibles_muestras.includes(num_c1) && palo_c1 == palo_muestra) {
                    muestras.push(num_c1)
                }else{
                    no_muestras.push(num_c1)
                    palos_no_muestras.push(palo_c1)
                }
                if (posibles_muestras.includes(num_c2) && palo_c2 == palo_muestra) {
                    muestras.push(num_c2)
                }else{
                    no_muestras.push(num_c2)
                    palos_no_muestras.push(palo_c2)

                }
                if (posibles_muestras.includes(num_c3) && palo_c3 == palo_muestra) {
                    muestras.push(num_c3)
                }else{
                    no_muestras.push(num_c3)
                    palos_no_muestras.push(palo_c3)

                }
                var valores = { 2: 30, 4: 29, 5: 28, 11: 27, 10: 27 }
                var explicacion = ""

                //Identifica que tipo de flor es y llama a su respectivo método.
                if (muestras.length == 3) {
                    var valor_c1 = valores[num_c1]
                    var valor_c2 = valores[num_c2]
                    var valor_c3 = valores[num_c3]

                    
                    var muestra_mayor = Math.max(valor_c1, valor_c2, valor_c3)
                                                       
                    muestra_mayor = getClave(muestra_mayor)
                    var index = muestras.indexOf(muestra_mayor);
                    muestras.splice(index, 1)

                    explicacion = flor_3Muestras(muestra_mayor, muestras[0], muestras[1], palo_muestra)
                    alert(explicacion)
                    return explicacion
                } else if (muestras.length == 2) {
                    var valor_m1 = valores[muestras[0]]
                    var valor_m2 = valores[muestras[1]]

                    var muestra_mayor = Math.max(valor_m1, valor_m2)
                    muestra_mayor = getClave(muestra_mayor)
                    var index = muestras.indexOf(muestra_mayor);
                    muestras.splice(index, 1)

                    explicacion = flor_2muestra(muestra_mayor, palo_muestra, muestras[0], no_muestras[0], palos_no_muestras[0]) 
                    alert(explicacion)
                    return explicacion
                } else if (muestras.length == 1) {
                    explicacion = flor_1muestra(muestras[0], palo_muestra, no_muestras[0], palos_no_muestras[0], no_muestras[1], palos_no_muestras[1])
                    alert(explicacion)
                    return explicacion
                }else if (muestras.length == 0) {
                    explicacion = flor_0muestras(no_muestras[0], no_muestras[1], no_muestras[2], palos_no_muestras[0])
                    alert(explicacion)
                    return explicacion
                } 
                else {
                    alert("No tienes flor.")
                     
                }

            } else {
                alert("No pueden haber cartas duplicadas.");
            }
        } else {
            alert("Faltan cartas, revisa las casillas.");
        }
    } else {
        alert("No existen los 9 y/o 8 en el truco. Revisa las cartas")
    }
}


function distintasCartas(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3) {
    const cartas = [
        { num: num_muestra, palo: palo_muestra },
        { num: num_c1, palo: palo_c1 },
        { num: num_c2, palo: palo_c2 },
        { num: num_c3, palo: palo_c3 }
    ];

    const uniqueCartas = new Set();

    for (const carta of cartas) {
        const clave = `${carta.num}-${carta.palo}`;
        if (uniqueCartas.has(clave)) {
            return false;
        }
        uniqueCartas.add(clave);
    }

    return true;
}

function noNulas(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3) {
    if (
        num_muestra !== null &&
        palo_muestra !== null &&
        num_c1 !== null &&
        palo_c1 !== null &&
        num_c2 !== null &&
        palo_c2 !== null &&
        num_c3 !== null &&
        palo_c3 !== null
    ) {
        return true
    }
    return false

}

function getClave(valorDeseado){
    var valores = { 2: 30, 4: 29, 5: 28, 11: 27, 10: 27 }
    for (var clave in valores) {
        if (valores[clave] === valorDeseado) {
            return parseInt(clave, 10);
        }
      }
}

/*Precondiciones:
- Se debe conocer la muestra de mayor valor.
- Si una muestra es 12, se debe de cambiar previamente por el numero de la muestra_ronda
*/
function flor_3Muestras(num_muestra_mayor, num_muestra2, num_muestra3, palo_muestras) {
    var valores = { 2: 30, 4: 29, 5: 28, 11: 27, 10: 27 }
    var totalFlor = 0
    var explicacion = ""

    switch (num_muestra_mayor) {
        case 2:
            totalFlor += valores[num_muestra_mayor]
            explicacion += "\nSe suma 30 por el " + num_muestra_mayor + " de " + palo_muestras
            break;
        case 4:
            totalFlor += valores[num_muestra_mayor]
            explicacion += "\nSe suma 29 por el " + num_muestra_mayor + " de " + palo_muestras
            break;
        case 5:
            totalFlor += valores[num_muestra_mayor]
            explicacion += "\nSe suma 28 por el " + num_muestra_mayor + " de" + palo_muestras
            break;
        case 11:
            totalFlor += valores[num_muestra_mayor]
            explicacion += "\nSe suma 27 por el " + num_muestra_mayor + " de " + palo_muestras
            break;
        case 10:
            totalFlor += valores[num_muestra_mayor]
            explicacion += "\nSe suma 27 por el " + num_muestra_mayor + " de " + palo_muestras
            break;
        default:
            break;
    }

    //Sumamos muestra 2 - 20
    switch (num_muestra2) {
        case 2:
            totalFlor += (valores[num_muestra2] - 20)
            explicacion += "\nSe suma 10 por el " + num_muestra2 + " de " + palo_muestras
            break;
        case 4:
            totalFlor += (valores[num_muestra2] - 20)
            explicacion += "\nSe suma 9 por el " + num_muestra2 + " de " + palo_muestras
            break;
        case 5:
            totalFlor += (valores[num_muestra2] - 20)
            explicacion += "\nSe suma 8 por el " + num_muestra2 + " de " + palo_muestras
            break;
        case 11:
            totalFlor += (valores[num_muestra2] - 20)
            explicacion += "\nSe suma 7 por el " + num_muestra2 + " de " + palo_muestras
            break;
        case 10:
            totalFlor += (valores[num_muestra2] - 20)
            explicacion += "\nSe suma 7 por el " + num_muestra2 + " de " + palo_muestras
            break;
        default:
            break;
    }

    //Sumamos muestra 2 
    switch (num_muestra3) {
        case 2:
            totalFlor += (valores[num_muestra3] - 20)
            explicacion += "\nSe suma 10 por el " + num_muestra3 + " de " + palo_muestras
            break;
        case 4:
            totalFlor += (valores[num_muestra3] - 20)
            explicacion += "\nSe suma 9 por el " + num_muestra3 + " de " + palo_muestras
            break;
        case 5:
            totalFlor += (valores[num_muestra3] - 20)
            explicacion += "\nSe suma 8 por el " + num_muestra3 + " de " + palo_muestras
            break;
        case 11:
            totalFlor += (valores[num_muestra3] - 20)
            explicacion += "\nSe suma 7 por el " + num_muestra3 + " de " + palo_muestras
            break;
        case 10:
            totalFlor += (valores[num_muestra3] - 20)
            explicacion += "\nSe suma 7 por el " + num_muestra3 + " de " + palo_muestras
            break;
        default:
            break;
    }
    var resultado = totalFlor + explicacion
    return resultado
    
}
/*Precondiciones:
- Se debe identificar las muestras previamente, y la que no es muestra.
- Se debe conocer la muestra de mayor valor.
- Si una muestra es 12, se debe de cambiar previamente por el numero de la muestra_ronda
*/
function flor_2muestra(/*num_muestra_ronda,*/ num_muestra_mayor, palo_muestras, num_muestra2, num_no_muestra, palo_no_muestra) {
    var valores = { 2: 30, 4: 29, 5: 28, 11: 27, 10: 27 }
    var totalFlor = 0
    var explicacion = ""

    switch (num_muestra_mayor) {
        case 2:
            totalFlor += valores[num_muestra_mayor]
            explicacion += "\nSe suma 30 por el " + num_muestra_mayor + " de " + palo_muestras
            break;
        case 4:
            totalFlor += valores[num_muestra_mayor]
            explicacion += "\nSe suma 29 por el " + num_muestra_mayor + " de " + palo_muestras
            break;
        case 5:
            totalFlor += valores[num_muestra_mayor]
            explicacion += "\nSe suma 28 por el " + num_muestra_mayor + " de " + palo_muestras
            break;
        case 11:
            totalFlor += valores[num_muestra_mayor]
            explicacion += "\nSe suma 27 por el " + num_muestra_mayor + " de " + palo_muestras
            break;
        case 10:
            totalFlor += valores[num_muestra_mayor]
            explicacion += "\nSe suma 27 por el " + num_muestra_mayor + " de " + palo_muestras
            break;
        default:
            break;
    }


    //Sumamos muestra 2 
    switch (num_muestra2) {
        case 2:
            totalFlor += (valores[num_muestra2] - 20)
            explicacion += "\nSe suma 10 por el " + num_muestra2 + " de " + palo_muestras
            break;
        case 4:
            totalFlor += (valores[num_muestra2] - 20)
            explicacion += "\nSe suma 9 por el " + num_muestra2 + " de " + palo_muestras
            break;
        case 5:
            totalFlor += (valores[num_muestra2] - 20)
            explicacion += "\nSe suma 8 por el " + num_muestra2 + " de " + palo_muestras
            break;
        case 11:
            totalFlor += (valores[num_muestra2] - 20)
            explicacion += "\nSe suma 7 por el " + num_muestra2 + " de " + palo_muestras
            break;
        case 10:
            totalFlor += (valores[num_muestra2] - 20)
            explicacion += "\nSe suma 7 por el " + num_muestra2 + " de " + palo_muestras
            break;
        default:
            break;
    }
    //Cuenta tercera carta
    switch (num_no_muestra) {
        case 1:
            totalFlor += 1
            explicacion += "\nSe suma 1 por el " + num_no_muestra + " de " + palo_no_muestra
            break;
        case 2:
            totalFlor += 2
            explicacion += "\nSe suma 2 por el " + num_no_muestra + " de " + palo_no_muestra
            break;
        case 3:
            totalFlor += 3
            explicacion += "\nSe suma 3 por el " + num_no_muestra + " de " + palo_no_muestra
            break;
        case 4:
            totalFlor += 4
            explicacion += "\nSe suma 4 por el " + num_no_muestra + " de " + palo_no_muestra
            break;
        case 5:
            totalFlor += 5
            explicacion += "\nSe suma 5 por el " + num_no_muestra + " de " + palo_no_muestra
            break;
        case 6:
            totalFlor += 6
            explicacion += "\nSe suma 6 por el " + num_no_muestra + " de " + palo_no_muestra
            break;
        case 7:
            totalFlor += 7
            explicacion += "\nSe suma 7 por el " + num_no_muestra + " de " + palo_no_muestra
            break;
        default:
            break;
    }
    var resultado = totalFlor + explicacion
    return resultado

}


/*Precondiciones:
- Se debe identificar la muestra previamente, y las 2 que no son muestras. 
*/
function flor_1muestra(/*num_muestra_ronda,*/ num_muestra, palo_muestra, num_no_muestra1, palo_no_muestra1, num_no_muestra2, palo_no_muestra2) {
    var valores = { 2: 30, 4: 29, 5: 28, 11: 27, 10: 27 }

    var explicacion = ""
    var totalFlor = 0
    var muestras = [2, 4, 5, 10, 11];

    // if (num_muestra == 12) {
    //     if (muestras.includes(num_muestra_ronda)) {
    //         num_muestra = num_muestra_ronda
    //     }
    // }

    switch (num_muestra) {
        case 2:
            totalFlor += valores[num_muestra]
            explicacion += "\nSe suma 30 por el " + num_muestra + " de " + palo_muestra
            break;
        case 4:
            totalFlor += valores[num_muestra]
            explicacion += "\nSe suma 29 por el " + num_muestra + " de " + palo_muestra
            break;
        case 5:
            totalFlor += valores[num_muestra]
            explicacion += "\nSe suma 28 por el " + num_muestra + " de " + palo_muestra
            break;
        case 11:
            totalFlor += valores[num_muestra]
            explicacion += "\nSe suma 27 por el " + num_muestra + " de " + palo_muestra
            break;
        case 10:
            totalFlor += valores[num_muestra]
            explicacion += "\nSe suma 27 por el " + num_muestra + " de " + palo_muestra
            break;
        case 12:
            totalFlor += valores[num_muestra]
            explicacion += "\nSe suma " + valores[num_muestra] + " por el " + num_muestra + " de " + palo_muestra
            break;
        default:
            break;
    }

    //Cuenta segunda carta
    switch (num_no_muestra1) {
        case 1:
            totalFlor += 1
            explicacion += "\nSe suma 1 por el " + num_no_muestra1 + " de " + palo_no_muestra1
            break;
        case 2:
            totalFlor += 2
            explicacion += "\nSe suma 2 por el " + num_no_muestra1 + " de " + palo_no_muestra1
            break;
        case 3:
            totalFlor += 3
            explicacion += "\nSe suma 3 por el " + num_no_muestra1 + " de " + palo_no_muestra1
            break;
        case 4:
            totalFlor += 4
            explicacion += "\nSe suma 4 por el " + num_no_muestra1 + " de " + palo_no_muestra1
            break;
        case 5:
            totalFlor += 5
            explicacion += "\nSe suma 5 por el " + num_no_muestra1 + " de " + palo_no_muestra1
            break;
        case 6:
            totalFlor += 6
            explicacion += "\nSe suma 6 por el " + num_no_muestra1 + " de " + palo_no_muestra1
            break;
        case 7:
            totalFlor += 7
            explicacion += "\nSe suma 7 por el " + num_no_muestra1 + " de " + palo_no_muestra1
            break;
        default:
            break;
    }
    //Cuenta tercera carta
    switch (num_no_muestra2) {
        case 1:
            totalFlor += 1
            explicacion += "\nSe suma 1 por el " + num_no_muestra2 + " de " + palo_no_muestra2
            break;
        case 2:
            totalFlor += 2
            explicacion += "\nSe suma 2 por el " + num_no_muestra2 + " de " + palo_no_muestra2
            break;
        case 3:
            totalFlor += 3
            explicacion += "\nSe suma 3 por el " + num_no_muestra2 + " de " + palo_no_muestra2
            break;
        case 4:
            totalFlor += 4
            explicacion += "\nSe suma 4 por el " + num_no_muestra2 + " de " + palo_no_muestra2
            break;
        case 5:
            totalFlor += 5
            explicacion += "\nSe suma 5 por el " + num_no_muestra2 + " de " + palo_no_muestra2
            break;
        case 6:
            totalFlor += 6
            explicacion += "\nSe suma 6 por el " + num_no_muestra2 + " de " + palo_no_muestra2
            break;
        case 7:
            totalFlor += 7
            explicacion += "\nSe suma 7 por el " + num_no_muestra2 + " de " + palo_no_muestra2
            break;
        default:
            break;
    }
    var resultado = totalFlor + explicacion
    return resultado
}

/*Precondiciones:
- Se debe verificar que las 3 cartas son del mismo palo 
*/
function flor_0muestras(num_no_muestra1, num_no_muestra2, num_no_muestra3, palos_no_muestras) {
    var totalFlor = 0
    var explicacion = ""
    //Cuenta primera carta
    switch (num_no_muestra1) {
        case 1:
            totalFlor += 1
            explicacion += "\nSe suma 1 por el " + num_no_muestra1 + " de " + palos_no_muestras
            break;
        case 2:
            totalFlor += 2
            explicacion += "\nSe suma 2 por el " + num_no_muestra1 + " de " + palos_no_muestras
            break;
        case 3:
            totalFlor += 3
            explicacion += "\nSe suma 3 por el " + num_no_muestra1 + " de " + palos_no_muestras
            break;
        case 4:
            totalFlor += 4
            explicacion += "\nSe suma 4 por el " + num_no_muestra1 + " de " + palos_no_muestras
            break;
        case 5:
            totalFlor += 5
            explicacion += "\nSe suma 5 por el " + num_no_muestra1 + " de " + palos_no_muestras
            break;
        case 6:
            totalFlor += 6
            explicacion += "\nSe suma 6 por el " + num_no_muestra1 + " de " + palos_no_muestras
            break;
        case 7:
            totalFlor += 7
            explicacion += "\nSe suma 7 por el " + num_no_muestra1 + " de " + palos_no_muestras
            break;
        default:
            break;

    }
    //Cuenta segunda carta
    switch (num_no_muestra2) {
        case 1:
            totalFlor += 1
            explicacion += "\nSe suma 1 por el " + num_no_muestra2 + " de " + palos_no_muestras
            break;
        case 2:
            totalFlor += 2
            explicacion += "\nSe suma 2 por el " + num_no_muestra2 + " de " + palos_no_muestras
            break;
        case 3:
            totalFlor += 3
            explicacion += "\nSe suma 3 por el " + num_no_muestra2 + " de " + palos_no_muestras
            break;
        case 4:
            totalFlor += 4
            explicacion += "\nSe suma 4 por el " + num_no_muestra2 + " de " + palos_no_muestras
            break;
        case 5:
            totalFlor += 5
            explicacion += "\nSe suma 5 por el " + num_no_muestra2 + " de " + palos_no_muestras
            break;
        case 6:
            totalFlor += 6
            explicacion += "\nSe suma 6 por el " + num_no_muestra2 + " de " + palos_no_muestras
            break;
        case 7:
            totalFlor += 7
            explicacion += "\nSe suma 7 por el " + num_no_muestra2 + " de " + palos_no_muestras
            break;
        default:
            break;
    }
    //Cuenta tercera carta
    switch (num_no_muestra3) {
        case 1:
            totalFlor += 1
            explicacion += "\nSe suma 1 por el " + num_no_muestra3 + " de " + palos_no_muestras
            break;
        case 2:
            totalFlor += 2
            explicacion += "\nSe suma 2 por el " + num_no_muestra3 + " de " + palos_no_muestras
            break;
        case 3:
            totalFlor += 3
            explicacion += "\nSe suma 3 por el " + num_no_muestra3 + " de " + palos_no_muestras
            break;
        case 4:
            totalFlor += 4
            explicacion += "\nSe suma 4 por el " + num_no_muestra3 + " de " + palos_no_muestras
            break;
        case 5:
            totalFlor += 5
            explicacion += "\nSe suma 5 por el " + num_no_muestra3 + " de " + palos_no_muestras
            break;
        case 6:
            totalFlor += 6
            explicacion += "\nSe suma 6 por el " + num_no_muestra3 + " de " + palos_no_muestras
            break;
        case 7:
            totalFlor += 7
            explicacion += "\nSe suma 7 por el " + num_no_muestra3 + " de " + palos_no_muestras
            break;
        default:
            break;
    }
    var resultado = totalFlor + explicacion
    return resultado
}