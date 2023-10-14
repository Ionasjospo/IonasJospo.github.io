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


function calcularEnvido() {
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

    if (!numerosInvalidos.includes(num_muestra) && !numerosInvalidos.includes(num_c1) && !numerosInvalidos.includes(num_c2) && !numerosInvalidos.includes(num_c3)) {
        if (noNulas(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3)) {
            if (distintasCartas(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3)) {
                var explicacion = ""

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
                } else {
                    no_muestras.push(num_c1)
                    palos_no_muestras.push(palo_c1)
                }
                if (posibles_muestras.includes(num_c2) && palo_c2 == palo_muestra) {
                    muestras.push(num_c2)
                } else {
                    no_muestras.push(num_c2)
                    palos_no_muestras.push(palo_c2)

                }
                if (posibles_muestras.includes(num_c3) && palo_c3 == palo_muestra) {
                    muestras.push(num_c3)
                } else {
                    no_muestras.push(num_c3)
                    palos_no_muestras.push(palo_c3)

                }

                var no_sumables = [10, 11, 12]

                if (muestras.length == 1) {
                    var mayor = Math.max(no_muestras[0], no_muestras[1])
                    var index_mayor = no_muestras.indexOf(mayor)
                    explicacion = envido1Muestra(muestras[0], palo_muestra, mayor, palos_no_muestras[index_mayor])
                    alert(explicacion)
                    return explicacion
                } else if (no_muestras.length == 3) {
                    
                    if (palos_no_muestras[0] == palos_no_muestras[1] && palos_no_muestras[0] != palos_no_muestras[2]) {
                        explicacion = envido_2palos(no_muestras[0], no_muestras[1], palos_no_muestras[0])
                        alert(explicacion)
                        return explicacion
                    }else if (palos_no_muestras[0] == palos_no_muestras[2] && palos_no_muestras[0] != palos_no_muestras[1]) {
                        explicacion = envido_2palos(no_muestras[0], no_muestras[2], palos_no_muestras[0])
                        alert(explicacion)
                        return explicacion
                    }else if (palos_no_muestras[1] == palos_no_muestras[2] && palos_no_muestras[1] != palos_no_muestras[0]) {
                        explicacion = envido_2palos(no_muestras[1], no_muestras[2], palos_no_muestras[0])
                        alert(explicacion)
                        return explicacion 
                    }else if (palos_no_muestras[0] != palos_no_muestras[1] && palos_no_muestras[0] != palos_no_muestras[2]) {
                        explicacion = envido_1carta(no_muestras[0], palos_no_muestras[0], no_muestras[1], palos_no_muestras[1], 
                            no_muestras[2], palos_no_muestras[2])
                        alert(explicacion)
                        return explicacion 
                    } else{ //son iguales los 3 palos
                        alert("Tenes flor, no envido.")
                    }  
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

function envido1Muestra(num_muestra, palo_muestra, num_mayor, palo_mayor) {
    valores = { 2: 30, 4: 29, 5: 28, 11: 27, 10: 27 }
    var totalEnvido = 0
    var explicacion = ""

    switch (num_muestra) {
        case 2:
            totalEnvido += valores[num_muestra]
            explicacion += "\nSe suma 30 por el " + num_muestra + " de " + palo_muestra
            break;
        case 4:
            totalEnvido += valores[num_muestra]
            explicacion += "\nSe suma 29 por el " + num_muestra + " de " + palo_muestra
            break;
        case 5:
            totalEnvido += valores[num_muestra]
            explicacion += "\nSe suma 28 por el " + num_muestra + " de " + palo_muestra
            break;
        case 11:
            totalEnvido += valores[num_muestra]
            explicacion += "\nSe suma 27 por el " + num_muestra + " de " + palo_muestra
            break;
        case 10:
            totalEnvido += valores[num_muestra]
            explicacion += "\nSe suma 27 por el " + num_muestra + " de " + palo_muestra
            break;
        default:
            break;
    }

    switch (num_mayor) {
        case 1:
            totalEnvido += 1
            explicacion += "\nSe suma 1 por el " + num_mayor + " de " + palo_mayor
            break;
        case 2:
            totalEnvido += 2
            explicacion += "\nSe suma 2 por el " + num_mayor + " de " + palo_mayor
            break;
        case 3:
            totalEnvido += 3
            explicacion += "\nSe suma 3 por el " + num_mayor + " de " + palo_mayor
            break;
        case 4:
            totalEnvido += 4
            explicacion += "\nSe suma 4 por el " + num_mayor + " de " + palo_mayor
            break;
        case 5:
            totalEnvido += 5
            explicacion += "\nSe suma 5 por el " + num_mayor + " de " + palo_mayor
            break;
        case 6:
            totalEnvido += 6
            explicacion += "\nSe suma 6 por el " + num_mayor + " de " + palo_mayor
            break;
        case 7:
            totalEnvido += 7
            explicacion += "\nSe suma 7 por el " + num_mayor + " de " + palo_mayor
            break;
        default:
            break;

    }
    var resultado = totalEnvido + explicacion
    return resultado
}

function envido_2palos(num_c1, num_c2, palo) {
    var totalEnvido = 20
    var explicacion = ""

    switch (num_c1) {
        case 1:
            totalEnvido += 1
            explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo
            break;
        case 2:
            totalEnvido += 2
            explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo
            break;
        case 3:
            totalEnvido += 3
            explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo
            break;
        case 4:
            totalEnvido += 4
            explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo
            break;
        case 5:
            totalEnvido += 5
            explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo
            break;
        case 6:
            totalEnvido += 6
            explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo
            break;
        case 7:
            totalEnvido += 7
            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo
            break;
        default:
            break;

    }
    switch (num_c2) {
        case 1:
            totalEnvido += 1
            explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo
            break;
        case 2:
            totalEnvido += 2
            explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo
            break;
        case 3:
            totalEnvido += 3
            explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo
            break;
        case 4:
            totalEnvido += 4
            explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo
            break;
        case 5:
            totalEnvido += 5
            explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo
            break;
        case 6:
            totalEnvido += 6
            explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo
            break;
        case 7:
            totalEnvido += 7
            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo
            break;
        default:
            break;

    }
    var resultado = totalEnvido + explicacion
    return resultado
}

function envido_1carta(num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3) {
    var arr = [num_c1, num_c2, num_c3]
    var totalEnvido = 0
    var explicacion = ""
    const numeros_sumables = arr.filter(numero => numero !== 10 && numero !== 11 && numero !== 12);
    const mas_grande = Math.max(...numeros_sumables);
    var palo_mas_grande = ""
    if (mas_grande == num_c1) { palo_mas_grande = palo_c1 }
    if (mas_grande == num_c2) { palo_mas_grande = palo_c2 }
    if (mas_grande == num_c3) { palo_mas_grande = palo_c3 }

    switch (mas_grande) {
        case 1:
            totalEnvido += 1
            explicacion += "\nSe suma 1 por el " + mas_grande + " de " + palo_mas_grande
            break;
        case 2:
            totalEnvido += 2
            explicacion += "\nSe suma 2 por el " + mas_grande + " de " + palo_mas_grande
            break;
        case 3:
            totalEnvido += 3
            explicacion += "\nSe suma 3 por el " + mas_grande + " de " + palo_mas_grande
            break;
        case 4:
            totalEnvido += 4
            explicacion += "\nSe suma 4 por el " + mas_grande + " de " + palo_mas_grande
            break;
        case 5:
            totalEnvido += 5
            explicacion += "\nSe suma 5 por el " + mas_grande + " de " + palo_mas_grande
            break;
        case 6:
            totalEnvido += 6
            explicacion += "\nSe suma 6 por el " + mas_grande + " de " + palo_mas_grande
            break;
        case 7:
            totalEnvido += 7
            explicacion += "\nSe suma 7 por el " + mas_grande + " de " + palo_mas_grande
            break;
        default:
            break;

    }
    var resultado = totalEnvido + explicacion
    return resultado

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


