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
    var numeroMuestra = parseInt(numeroMStr, 10);
    var palo_muestra = document.getElementById('dropdownMenuButton1').textContent;

    var numCarta1Str = document.getElementById('ncarta1').value;
    var numCarta1 = parseInt(numCarta1Str, 10);
    var palo_carta1 = document.getElementById('dropdownMenuButton2').textContent;

    var numCarta2Str = document.getElementById('ncarta2').value;
    var numCarta2 = parseInt(numCarta2Str, 10);
    var palo_carta2 = document.getElementById('dropdownMenuButton3').textContent;

    var numCarta3Str = document.getElementById('ncarta3').value;
    var numCarta3 = parseInt(numCarta3Str, 10);
    var palo_carta3 = document.getElementById('dropdownMenuButton4').textContent;

    if (!numerosInvalidos.includes(numeroMuestra) && !numerosInvalidos.includes(numCarta1) && !numerosInvalidos.includes(numCarta2) &&
        !numerosInvalidos.includes(numCarta3)) {
        if (noNulas(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3) == true) {
            if (distintasCartas(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3) == true) {
                var explicacion = ""
                var envido1M = envido1Muestra(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3, explicacion)
                if (envido1M != "" && envido1M !== undefined) {
                    alert(envido1M)
                    return envido1M
                }
                var mismo_palo2 = envidoMismo_palo2(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3, explicacion)
                if (mismo_palo2 != "" && mismo_palo2 !== undefined) {
                    alert(mismo_palo2)
                    return mismo_palo2
                }
                var unPalo = envido1palo(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3, explicacion)
                if (unPalo != "" && unPalo !== undefined) {
                    alert(unPalo)
                    return unPalo
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

function envido1Muestra(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3, explicacion) {
    valores = { 2: 30, 4: 29, 5: 28, 11: 27, 10: 27 }
    var totalEnvido = 0
    var muestras = [2, 4, 5, 10, 11];
    var pal12 = [2, 4, 5, 10, 11, 12];

    var no_sumables = [10, 11, 12]

    var las_2_no_muestras = []
    var la_muestra = ""

    if (muestras.includes(num_muestra)) {
        //12

        //Identifica la muestra y las 2 que no son muestras
        if (pal12.includes(num_c1) && palo_muestra == palo_c1) {
            la_muestra = num_c1
        } else {
            las_2_no_muestras.push("c2")
            las_2_no_muestras.push("c3")
        }
        if (pal12.includes(num_c2) && palo_muestra == palo_c2) {
            la_muestra = num_c2
        } else {
            las_2_no_muestras.push("c1")
            las_2_no_muestras.push("c3")
        }
        if (pal12.includes(num_c3) && palo_muestra == palo_c3) {
            la_muestra = num_c3
        } else {
            las_2_no_muestras.push("c1")
            las_2_no_muestras.push("c2")
        }

        if (la_muestra == "") {
            return undefined
        }

        if (la_muestra == num_c1) {
            if (palo_c2 != palo_c3) {
                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalEnvido += valores[num_c1]
                            explicacion += "\nSe suma 30 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalEnvido += valores[num_c1]
                            explicacion += "\nSe suma 29 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalEnvido += valores[num_c1]
                            explicacion += "\nSe suma 28 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalEnvido += valores[num_c1]
                            explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalEnvido += valores[num_c1]
                            explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                        if (palo_c1 == palo_muestra) {
                            totalEnvido += valores[num_muestra]
                            explicacion += "\nSe suma " + valores[num_muestra] + " por el " + num_muestra + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                if (!no_sumables.includes(num_c2) && !no_sumables.includes(num_c3)) {
                    var num_carta_mas_grande = Math.max(num_c2, num_c3)
                    if (num_carta_mas_grande == num_c2) { //C2
                        //Cuenta la carta mas grande
                        switch (num_c2) {
                            case 1:
                                totalEnvido += 1
                                explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 2:
                                totalEnvido += 2
                                explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 3:
                                totalEnvido += 3
                                explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 4:
                                totalEnvido += 4
                                explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 5:
                                totalEnvido += 5
                                explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 6:
                                totalEnvido += 6
                                explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 7:
                                totalEnvido += 7
                                explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                                break;
                            default:
                                break;
                                var resultado = totalEnvido + explicacion
                                return resultado
                        }
                        var resultado = totalEnvido + explicacion
                        return resultado
                    } else { //C3
                        //Cuenta tercera carta
                        switch (num_c3) {
                            case 1:
                                totalEnvido += 1
                                explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 2:
                                totalEnvido += 2
                                explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 3:
                                totalEnvido += 3
                                explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 4:
                                totalEnvido += 4
                                explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 5:
                                totalEnvido += 5
                                explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 6:
                                totalEnvido += 6
                                explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 7:
                                totalEnvido += 7
                                explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                                break;
                            default:
                                break;
                        }
                        var resultado = totalEnvido + explicacion
                        return resultado
                    }
                }
            }
        } else if (la_muestra == num_c2) {
            if (palo_c1 != palo_c3) {
                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalEnvido += valores[num_c2]
                            explicacion += "\nSe suma 30 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalEnvido += valores[num_c2]
                            explicacion += "\nSe suma 29 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalEnvido += valores[num_c2]
                            explicacion += "\nSe suma 28 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalEnvido += valores[num_c2]
                            explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalEnvido += valores[num_c2]
                            explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                        if (palo_c2 == palo_muestra) {
                            totalEnvido += valores[num_muestra]
                            explicacion += "\nSe suma " + valores[num_muestra] + " por el " + num_muestra + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                if (!no_sumables.includes(num_c1) && !no_sumables.includes(num_c3)) {
                    var num_carta_mas_grande = Math.max(num_c1, num_c3)
                    if (num_carta_mas_grande == num_c1) { //C2
                        //Cuenta la carta mas grande
                        switch (num_c1) {
                            case 1:
                                totalEnvido += 1
                                explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 2:
                                totalEnvido += 2
                                explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 3:
                                totalEnvido += 3
                                explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 4:
                                totalEnvido += 4
                                explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 5:
                                totalEnvido += 5
                                explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 6:
                                totalEnvido += 6
                                explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 7:
                                totalEnvido += 7
                                explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                                break;
                            default:
                                break;
                                var resultado = totalEnvido + explicacion
                                return resultado
                        }
                        var resultado = totalEnvido + explicacion
                        return resultado
                    } else { //C3
                        //Cuenta tercera carta
                        switch (num_c3) {
                            case 1:
                                totalEnvido += 1
                                explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 2:
                                totalEnvido += 2
                                explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 3:
                                totalEnvido += 3
                                explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 4:
                                totalEnvido += 4
                                explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 5:
                                totalEnvido += 5
                                explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 6:
                                totalEnvido += 6
                                explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 7:
                                totalEnvido += 7
                                explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                                break;
                            default:
                                break;
                        }
                        var resultado = totalEnvido + explicacion
                        return resultado
                    }
                }
            }
        } else { // la_muestra == num_c3
            if (palo_c1 != palo_c2) {
                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalEnvido += valores[num_c3]
                            explicacion += "\nSe suma 30 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalEnvido += valores[num_c3]
                            explicacion += "\nSe suma 29 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalEnvido += valores[num_c3]
                            explicacion += "\nSe suma 28 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalEnvido += valores[num_c3]
                            explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalEnvido += valores[num_c3]
                            explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                        if (palo_c3 == palo_muestra) {
                            totalEnvido += valores[num_muestra]
                            explicacion += "\nSe suma " + valores[num_muestra] + " por el " + num_muestra + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                if (!no_sumables.includes(num_c1) && !no_sumables.includes(num_c2)) {
                    var num_carta_mas_grande = Math.max(num_c1, num_c2)
                    if (num_carta_mas_grande == num_c1) { //C1
                        //Cuenta la carta mas grande
                        switch (num_c1) {
                            case 1:
                                totalEnvido += 1
                                explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 2:
                                totalEnvido += 2
                                explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 3:
                                totalEnvido += 3
                                explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 4:
                                totalEnvido += 4
                                explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 5:
                                totalEnvido += 5
                                explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 6:
                                totalEnvido += 6
                                explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 7:
                                totalEnvido += 7
                                explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                                break;
                            default:
                                break;
                                var resultado = totalEnvido + explicacion
                                return resultado
                        }
                        var resultado = totalEnvido + explicacion
                        return resultado
                    } else { //C3
                        //Cuenta tercera carta
                        switch (num_c2) {
                            case 1:
                                totalEnvido += 1
                                explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 2:
                                totalEnvido += 2
                                explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 3:
                                totalEnvido += 3
                                explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 4:
                                totalEnvido += 4
                                explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 5:
                                totalEnvido += 5
                                explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 6:
                                totalEnvido += 6
                                explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 7:
                                totalEnvido += 7
                                explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                                break;
                            default:
                                break;
                        }
                        var resultado = totalEnvido + explicacion
                        return resultado
                    }
                }
            }
        }
    } else {
        //sin 12

        //Identifica la muestra y las 2 que no son muestras
        if (muestras.includes(num_c1) && palo_muestra == palo_c1) {
            la_muestra = num_c1
        } else {
            las_2_no_muestras.push("c2")
            las_2_no_muestras.push("c3")
        }
        if (muestras.includes(num_c2) && palo_muestra == palo_c2) {
            la_muestra = num_c2
        } else {
            las_2_no_muestras.push("c1")
            las_2_no_muestras.push("c3")
        }
        if (muestras.includes(num_c3) && palo_muestra == palo_c3) {
            la_muestra = num_c3
        } else {
            las_2_no_muestras.push("c1")
            las_2_no_muestras.push("c2")
        }

        if (la_muestra == "") {
            return undefined
        }

        if (la_muestra == num_c1) {
            if (palo_c2 != palo_c3) {
                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalEnvido += valores[num_c1]
                            explicacion += "\nSe suma 30 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalEnvido += valores[num_c1]
                            explicacion += "\nSe suma 29 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalEnvido += valores[num_c1]
                            explicacion += "\nSe suma 28 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalEnvido += valores[num_c1]
                            explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalEnvido += valores[num_c1]
                            explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                if (!no_sumables.includes(num_c2) && !no_sumables.includes(num_c3)) {
                    var num_carta_mas_grande = Math.max(num_c2, num_c3)
                    if (num_carta_mas_grande == num_c2) { //C2
                        //Cuenta la carta mas grande
                        switch (num_c2) {
                            case 1:
                                totalEnvido += 1
                                explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 2:
                                totalEnvido += 2
                                explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 3:
                                totalEnvido += 3
                                explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 4:
                                totalEnvido += 4
                                explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 5:
                                totalEnvido += 5
                                explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 6:
                                totalEnvido += 6
                                explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 7:
                                totalEnvido += 7
                                explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                                break;
                            default:
                                break;
                                var resultado = totalEnvido + explicacion
                                return resultado
                        }
                        var resultado = totalEnvido + explicacion
                        return resultado
                    } else { //C3
                        //Cuenta tercera carta
                        switch (num_c3) {
                            case 1:
                                totalEnvido += 1
                                explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 2:
                                totalEnvido += 2
                                explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 3:
                                totalEnvido += 3
                                explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 4:
                                totalEnvido += 4
                                explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 5:
                                totalEnvido += 5
                                explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 6:
                                totalEnvido += 6
                                explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 7:
                                totalEnvido += 7
                                explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                                break;
                            default:
                                break;
                        }
                        var resultado = totalEnvido + explicacion
                        return resultado
                    }
                }
            }
        } else if (la_muestra == num_c2) {
            if (palo_c1 != palo_c3) {
                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalEnvido += valores[num_c2]
                            explicacion += "\nSe suma 30 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalEnvido += valores[num_c2]
                            explicacion += "\nSe suma 29 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalEnvido += valores[num_c2]
                            explicacion += "\nSe suma 28 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalEnvido += valores[num_c2]
                            explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalEnvido += valores[num_c2]
                            explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                if (!no_sumables.includes(num_c1) && !no_sumables.includes(num_c3)) {
                    var num_carta_mas_grande = Math.max(num_c1, num_c3)
                    if (num_carta_mas_grande == num_c1) { //C2
                        //Cuenta la carta mas grande
                        switch (num_c1) {
                            case 1:
                                totalEnvido += 1
                                explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 2:
                                totalEnvido += 2
                                explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 3:
                                totalEnvido += 3
                                explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 4:
                                totalEnvido += 4
                                explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 5:
                                totalEnvido += 5
                                explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 6:
                                totalEnvido += 6
                                explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 7:
                                totalEnvido += 7
                                explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                                break;
                            default:
                                break;
                                var resultado = totalEnvido + explicacion
                                return resultado
                        }
                        var resultado = totalEnvido + explicacion
                        return resultado
                    } else { //C3
                        //Cuenta tercera carta
                        switch (num_c3) {
                            case 1:
                                totalEnvido += 1
                                explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 2:
                                totalEnvido += 2
                                explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 3:
                                totalEnvido += 3
                                explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 4:
                                totalEnvido += 4
                                explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 5:
                                totalEnvido += 5
                                explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 6:
                                totalEnvido += 6
                                explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                                break;
                            case 7:
                                totalEnvido += 7
                                explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                                break;
                            default:
                                break;
                        }
                        var resultado = totalEnvido + explicacion
                        return resultado
                    }
                }
            }
        } else { // la_muestra == num_c3
            if (palo_c1 != palo_c2) {
                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalEnvido += valores[num_c3]
                            explicacion += "\nSe suma 30 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalEnvido += valores[num_c3]
                            explicacion += "\nSe suma 29 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalEnvido += valores[num_c3]
                            explicacion += "\nSe suma 28 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalEnvido += valores[num_c3]
                            explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalEnvido += valores[num_c3]
                            explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                if (!no_sumables.includes(num_c1) && !no_sumables.includes(num_c2)) {
                    var num_carta_mas_grande = Math.max(num_c1, num_c2)
                    if (num_carta_mas_grande == num_c1) { //C1
                        //Cuenta la carta mas grande
                        switch (num_c1) {
                            case 1:
                                totalEnvido += 1
                                explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 2:
                                totalEnvido += 2
                                explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 3:
                                totalEnvido += 3
                                explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 4:
                                totalEnvido += 4
                                explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 5:
                                totalEnvido += 5
                                explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 6:
                                totalEnvido += 6
                                explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                                break;
                            case 7:
                                totalEnvido += 7
                                explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                                break;
                            default:
                                break;
                                var resultado = totalEnvido + explicacion
                                return resultado
                        }
                        var resultado = totalEnvido + explicacion
                        return resultado
                    } else { //C3
                        //Cuenta tercera carta
                        switch (num_c2) {
                            case 1:
                                totalEnvido += 1
                                explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 2:
                                totalEnvido += 2
                                explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 3:
                                totalEnvido += 3
                                explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 4:
                                totalEnvido += 4
                                explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 5:
                                totalEnvido += 5
                                explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 6:
                                totalEnvido += 6
                                explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                                break;
                            case 7:
                                totalEnvido += 7
                                explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                                break;
                            default:
                                break;
                        }
                        var resultado = totalEnvido + explicacion
                        return resultado
                    }
                }
            }
        }
    }
}

function envidoMismo_palo2(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3, explicacion) {
    var totalEnvido = 20
    explicacion += "\nSe suma 20 de base por tener dos del mismo palo."
    var no_sumables = [10, 11, 12]

    if (palo_c1 == palo_c2 && palo_c1 != palo_c3) {
        switch (num_c1) {
            case 1:
                totalEnvido += 1
                explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                break;
            case 2:
                totalEnvido += 2
                explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                break;
            case 3:
                totalEnvido += 3
                explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                break;
            case 4:
                totalEnvido += 4
                explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                break;
            case 5:
                totalEnvido += 5
                explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                break;
            case 6:
                totalEnvido += 6
                explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                break;
            case 7:
                totalEnvido += 7
                explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                break;
            default:
                break;
                var resultado = totalEnvido + explicacion
                return resultado
        }

        switch (num_c2) {
            case 1:
                totalEnvido += 1
                explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                break;
            case 2:
                totalEnvido += 2
                explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                break;
            case 3:
                totalEnvido += 3
                explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                break;
            case 4:
                totalEnvido += 4
                explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                break;
            case 5:
                totalEnvido += 5
                explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                break;
            case 6:
                totalEnvido += 6
                explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                break;
            case 7:
                totalEnvido += 7
                explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                break;
            default:
                break;
        }
        var resultado = totalEnvido + explicacion
        return resultado

    } else if (palo_c1 == palo_c3 && palo_c1 != palo_c2) {
        switch (num_c1) {
            case 1:
                totalEnvido += 1
                explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                break;
            case 2:
                totalEnvido += 2
                explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                break;
            case 3:
                totalEnvido += 3
                explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                break;
            case 4:
                totalEnvido += 4
                explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                break;
            case 5:
                totalEnvido += 5
                explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                break;
            case 6:
                totalEnvido += 6
                explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                break;
            case 7:
                totalEnvido += 7
                explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                break;
            default:
                break;
                var resultado = totalEnvido + explicacion
                return resultado
        }

        switch (num_c3) {
            case 1:
                totalEnvido += 1
                explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                break;
            case 2:
                totalEnvido += 2
                explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                break;
            case 3:
                totalEnvido += 3
                explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                break;
            case 4:
                totalEnvido += 4
                explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                break;
            case 5:
                totalEnvido += 5
                explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                break;
            case 6:
                totalEnvido += 6
                explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                break;
            case 7:
                totalEnvido += 7
                explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                break;
            default:
                break;
        }
        var resultado = totalEnvido + explicacion
        return resultado
    } else if (palo_c2 == palo_c3 && palo_c2 != palo_c1) {

        switch (num_c2) {
            case 1:
                totalEnvido += 1
                explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                break;
            case 2:
                totalEnvido += 2
                explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                break;
            case 3:
                totalEnvido += 3
                explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                break;
            case 4:
                totalEnvido += 4
                explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                break;
            case 5:
                totalEnvido += 5
                explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                break;
            case 6:
                totalEnvido += 6
                explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                break;
            case 7:
                totalEnvido += 7
                explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                break;
            default:
                break;
        }

        switch (num_c3) {
            case 1:
                totalEnvido += 1
                explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                break;
            case 2:
                totalEnvido += 2
                explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                break;
            case 3:
                totalEnvido += 3
                explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                break;
            case 4:
                totalEnvido += 4
                explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                break;
            case 5:
                totalEnvido += 5
                explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                break;
            case 6:
                totalEnvido += 6
                explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                break;
            case 7:
                totalEnvido += 7
                explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                break;
            default:
                break;
        }
        var resultado = totalEnvido + explicacion
        return resultado
    } else {
        //No deberia de llegar aca
        return undefined
    }

}

function envido1palo(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3, explicacion) {
    var totalEnvido = 0

    var prohibido = [10, 11, 12]

    if (palo_c1 != palo_c2 && palo_c1 != palo_c3) {
        if (!prohibido.includes(num_c1) && !prohibido.includes(num_c2) && !prohibido.includes(num_c3)) {  // 3 permitidos

            var mayor = Math.max(num_c1, num_c2, num_c3)
            if (mayor == num_c1) {
                switch (num_c1) {
                    case 1:
                        totalEnvido += 1
                        explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 2:
                        totalEnvido += 2
                        explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 3:
                        totalEnvido += 3
                        explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 4:
                        totalEnvido += 4
                        explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 5:
                        totalEnvido += 5
                        explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 6:
                        totalEnvido += 6
                        explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 7:
                        totalEnvido += 7
                        explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        break;
                    default:
                        break;
                        var resultado = totalEnvido + explicacion
                        return resultado
                }
                var resultado = totalEnvido + explicacion
                return resultado
            } else if (mayor == num_c1) {
                switch (num_c2) {
                    case 1:
                        totalEnvido += 1
                        explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 2:
                        totalEnvido += 2
                        explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 3:
                        totalEnvido += 3
                        explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 4:
                        totalEnvido += 4
                        explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 5:
                        totalEnvido += 5
                        explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 6:
                        totalEnvido += 6
                        explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 7:
                        totalEnvido += 7
                        explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        break;
                    default:
                        break;
                        var resultado = totalEnvido + explicacion
                        return resultado
                }
                var resultado = totalEnvido + explicacion
                return resultado
            }else{//mayor == num_c3
                switch (num_c3) {
                    case 1:
                        totalEnvido += 1
                        explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 2:
                        totalEnvido += 2
                        explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 3:
                        totalEnvido += 3
                        explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 4:
                        totalEnvido += 4
                        explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 5:
                        totalEnvido += 5
                        explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 6:
                        totalEnvido += 6
                        explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 7:
                        totalEnvido += 7
                        explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        break;
                    default:
                        break;
                        var resultado = totalEnvido + explicacion
                        return resultado
                }
                var resultado = totalEnvido + explicacion
                return resultado
            }
        } else if (!prohibido.includes(num_c1) && !prohibido.includes(num_c2) && prohibido.includes(num_c3)) { // 2 permitidos, 1 prohibido
            var mayor = Math.max(num_c1, num_c2)
            if (mayor == num_c1) {
                switch (num_c1) {
                    case 1:
                        totalEnvido += 1
                        explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 2:
                        totalEnvido += 2
                        explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 3:
                        totalEnvido += 3
                        explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 4:
                        totalEnvido += 4
                        explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 5:
                        totalEnvido += 5
                        explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 6:
                        totalEnvido += 6
                        explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 7:
                        totalEnvido += 7
                        explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        break;
                    default:
                        break;
                        var resultado = totalEnvido + explicacion
                        return resultado
                }
                var resultado = totalEnvido + explicacion
                return resultado
            } else {//mayor == num_c1
                switch (num_c2) {
                    case 1:
                        totalEnvido += 1
                        explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 2:
                        totalEnvido += 2
                        explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 3:
                        totalEnvido += 3
                        explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 4:
                        totalEnvido += 4
                        explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 5:
                        totalEnvido += 5
                        explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 6:
                        totalEnvido += 6
                        explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 7:
                        totalEnvido += 7
                        explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        break;
                    default:
                        break;
                        var resultado = totalEnvido + explicacion
                        return resultado
                }
                var resultado = totalEnvido + explicacion
                return resultado
            }
        }
        else if (!prohibido.includes(num_c1) && !prohibido.includes(num_c3) && prohibido.includes(num_c2)) { // 2 permitidos, 1 prohibido
            var mayor = Math.max(num_c1, num_c3)
            if (mayor == num_c1) {
                switch (num_c1) {
                    case 1:
                        totalEnvido += 1
                        explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 2:
                        totalEnvido += 2
                        explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 3:
                        totalEnvido += 3
                        explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 4:
                        totalEnvido += 4
                        explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 5:
                        totalEnvido += 5
                        explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 6:
                        totalEnvido += 6
                        explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 7:
                        totalEnvido += 7
                        explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        break;
                    default:
                        break;
                        var resultado = totalEnvido + explicacion
                        return resultado
                }
                var resultado = totalEnvido + explicacion
                return resultado
            } else {//mayor == num_c1
                switch (num_c3) {
                    case 1:
                        totalEnvido += 1
                        explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 2:
                        totalEnvido += 2
                        explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 3:
                        totalEnvido += 3
                        explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 4:
                        totalEnvido += 4
                        explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 5:
                        totalEnvido += 5
                        explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 6:
                        totalEnvido += 6
                        explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 7:
                        totalEnvido += 7
                        explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        break;
                    default:
                        break;
                        var resultado = totalEnvido + explicacion
                        return resultado
                }
                var resultado = totalEnvido + explicacion
                return resultado
            }
        }
        else if (!prohibido.includes(num_c2) && !prohibido.includes(num_c3) && prohibido.includes(num_c1)) { // 2 permitidos, 1 prohibido
            var mayor = Math.max(num_c2, num_c3)
            if (mayor == num_c2) {
                switch (num_c2) {
                    case 1:
                        totalEnvido += 1
                        explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 2:
                        totalEnvido += 2
                        explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 3:
                        totalEnvido += 3
                        explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 4:
                        totalEnvido += 4
                        explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 5:
                        totalEnvido += 5
                        explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 6:
                        totalEnvido += 6
                        explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 7:
                        totalEnvido += 7
                        explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        break;
                    default:
                        break;
                        var resultado = totalEnvido + explicacion
                        return resultado
                }
                var resultado = totalEnvido + explicacion
                return resultado
            } else {//mayor == num_c3
                switch (num_c3) {
                    case 1:
                        totalEnvido += 1
                        explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 2:
                        totalEnvido += 2
                        explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 3:
                        totalEnvido += 3
                        explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 4:
                        totalEnvido += 4
                        explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 5:
                        totalEnvido += 5
                        explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 6:
                        totalEnvido += 6
                        explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 7:
                        totalEnvido += 7
                        explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        break;
                    default:
                        break;
                        var resultado = totalEnvido + explicacion
                        return resultado
                }
                var resultado = totalEnvido + explicacion
                return resultado
            }
        }
        else if (!prohibido.includes(num_c1) && prohibido.includes(num_c2) && prohibido.includes(num_c3)) { // 1 permitido, 2 prohibidos
            totalEnvido += num_c1
            explicacion += "\nSe suma " + num_c1 + " por el " + num_c1 + " de " + palo_c1
            var resultado = totalEnvido + explicacion
            return resultado
        } else if (!prohibido.includes(num_c2) && prohibido.includes(num_c1) && prohibido.includes(num_c3)) { // 1 permitido, 2 prohibidos
            totalEnvido += num_c2
            explicacion += "\nSe suma " + num_c2 + " por el " + num_c2 + " de " + palo_c2
            var resultado = totalEnvido + explicacion
            return resultado
        } else if (!prohibido.includes(num_c3) && prohibido.includes(num_c1) && prohibido.includes(num_c2)) { // 1 permitido, 2 prohibidos
            totalEnvido += num_c3
            explicacion += "\nSe suma " + num_c3 + " por el " + num_c3 + " de " + palo_c3
            var resultado = totalEnvido + explicacion
            return resultado
        }
        else { // 3 prohibidos, ej: 12oro, 10 espada y 11 basto
            return "No tenes envido. Sumas 0."
        }


    } else {
        //No deberia de llegar aca
        return undefined
    }

}
