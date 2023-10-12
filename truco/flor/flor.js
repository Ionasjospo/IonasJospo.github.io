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
                var flor3 = flor3Muestras(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3, explicacion)
                if (flor3 != "" && flor3 !== undefined) {
                    alert(flor3)
                    return flor3
                }
                var flor2 = flor2Muestras(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3, explicacion)
                if (flor2 != "" && flor2 !== undefined) {
                    alert(flor2)
                    return flor2
                }
                var flor1 = flor1Muestra(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3, explicacion)
                if (flor1 != "" && flor1 !== undefined) {
                    alert(flor1)
                    return flor1
                }
                var flor0 = flor0Muestras(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3, explicacion)
                if (flor0 != 0 && flor0 !== undefined) {
                    alert(flor0)
                    return flor0
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

function flor3Muestras(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3, explicacion) {
    valores = { 2: 30, 4: 29, 5: 28, 11: 27, 10: 27 }
    var totalFlor = 0
    var muestras = [2, 4, 5, 10, 11];
    var pal12 = [2, 4, 5, 10, 11, 12];

    if (muestras.includes(num_muestra)) {
        //Se puede usar el 12 
        if (palo_c1 == palo_muestra && palo_c2 == palo_muestra && palo_c3 == palo_muestra) {
            if (pal12.includes(num_c1) && pal12.includes(num_c2) && pal12.includes(num_c3)) {

                //Cambia el valor de la carta por el valor de la muestra
                if (num_c1 == 12) {
                    var valorC1 = valores[num_muestra];
                } else {
                    var valorC1 = valores[num_c1];
                }
                if (num_c2 == 12) {
                    var valorC2 = valores[num_muestra];
                } else {
                    var valorC2 = valores[num_c2];
                } if (num_c3 == 12) {
                    var valorC3 = valores[num_muestra];
                } else {
                    var valorC3 = valores[num_c3];
                }

                var masGrande = Math.max(valorC1, valorC2, valorC3);

                if (masGrande === valorC1) {
                    switch (num_c1) {
                        case 2:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += valores[num_c1]
                                explicacion += "\nSe suma 30 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 4:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += valores[num_c1]
                                explicacion += "\nSe suma 29 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 5:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += valores[num_c1]
                                explicacion += "\nSe suma 28 por el " + num_c1 + " de" + palo_muestra
                            }
                            break;
                        case 11:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += valores[num_c1]
                                explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 10:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += valores[num_c1]
                                explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 12:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += valores[num_muestra]
                                explicacion += "\nSe suma " + valores[num_muestra] + " por el " + num_muestra + " de " + palo_muestra
                            }
                            break;
                        default:
                            break;
                    }

                    switch (num_c2) {
                        case 2:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "\nSe suma 10 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 4:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "\nSe suma 9 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 5:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "\nSe suma 8 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 11:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 10:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 12:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_muestra] - 20)
                                explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        default:
                            break;
                    }

                    switch (num_c3) {
                        case 2:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 10 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 4:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 9 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 5:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 8 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 11:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 10:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 12:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_muestra] - 20)
                                explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        default:
                            break;
                    }
                    var resultado = totalFlor + explicacion
                    return resultado
                } else if (masGrande === valorC2) {
                    switch (num_c2) {
                        case 2:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2])
                                explicacion += "\nSe suma 30 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 4:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2])
                                explicacion += "\nSe suma 29 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 5:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2])
                                explicacion += "\nSe suma 28 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 11:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2])
                                explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 10:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2])
                                explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 12:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_muestra])
                                explicacion += "\nSe suma" + (valores[num_muestra]) + " por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        default:
                            break;
                    }

                    switch (num_c1) {
                        case 2:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 10 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 4:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 9 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 5:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 8 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 11:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 10:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 12:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_muestra] - 20)
                                explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        default:
                            break;
                    }

                    switch (num_c3) {
                        case 2:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 10 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 4:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 9 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 5:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 8 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 11:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 10:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 12:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_muestra] - 20)
                                explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        default:
                            break;
                    }
                    var resultado = totalFlor + explicacion
                    return resultado
                } else {
                    switch (num_c3) {
                        case 2:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += valores[num_c3]
                                explicacion += "\nSe suma 30 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 4:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += valores[num_c3]
                                explicacion += "\nSe suma 29 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 5:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += valores[num_c3]
                                explicacion += "\nSe suma 28 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 11:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += valores[num_c3]
                                explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 10:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += valores[num_c3]
                                explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        case 12:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_muestra])
                                explicacion += "\nSe suma " + (valores[num_muestra]) + " por el " + num_c3 + " de " + palo_muestra
                            }
                            break;
                        default:
                            break;
                    }

                    switch (num_c1) {
                        case 2:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 10 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 4:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 9 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 5:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 8 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 11:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 10:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 12:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_muestra] - 20)
                                explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c1 + " de " + palo_muestra

                            }
                            break;
                        default:
                            break;
                    }

                    switch (num_c2) {
                        case 2:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "\nSe suma 10 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 4:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "\nSe suma 9 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 5:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "\nSe suma 8 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 11:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 10:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        case 12:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_muestra] - 20)
                                explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c2 + " de " + palo_muestra
                            }
                            break;
                        default:
                            break;
                    }
                    var resultado = totalFlor + explicacion
                    return resultado
                }
            }

        }
    } else {
        // No se puede usar el 12
        if (palo_c1 == palo_muestra && palo_c2 == palo_muestra && palo_c3 == palo_muestra) {

            var valorC1 = valores[num_c1];
            var valorC2 = valores[num_c2];
            var valorC3 = valores[num_c3];

            var masGrande = Math.max(valorC1, valorC2, valorC3);

            if (masGrande === valorC1) {
                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 30 por el " + num_c1 + " de " + palo_c1

                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 29 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 28 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    default:
                        break;
                }

                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    default:
                        break;
                }

                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    default:
                        break;
                }
                var resultado = totalFlor + explicacion
                return resultado
            } else if (masGrande === valorC2) {
                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2])
                            explicacion += "\nSe suma 30 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2])
                            explicacion += "\nSe suma 29 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2])
                            explicacion += "\nSe suma 28 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2])
                            explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2])
                            explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    default:
                        break;
                }

                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    default:
                        break;
                }

                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    default:
                        break;
                }
                var resultado = totalFlor + explicacion
                return resultado
            } else {
                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3])
                            explicacion += "\nSe suma 30 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3])
                            explicacion += "\nSe suma 29 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3])
                            explicacion += "\nSe suma 28 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3])
                            explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3])
                            explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_c3
                        }
                        break;
                    default:
                        break;
                }

                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        }
                        break;
                    default:
                        break;
                }

                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        }
                        break;
                    default:
                        break;
                }
                var resultado = totalFlor + explicacion
                return resultado
            }
        }
    }


}

function flor2Muestras(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3, explicacion) {
    valores = { 2: 30, 4: 29, 5: 28, 11: 27, 10: 27 }
    var totalFlor = 0
    var muestras = [2, 4, 5, 10, 11];
    var pal12 = [2, 4, 5, 10, 11, 12];

    var las_2_muestras = []
    var no_muestra = ""


    if (muestras.includes(num_muestra)) {
        //Se puede usar el 12 

        //Identifica las 2 muestras y la que no es muestra
        if (pal12.includes(num_c1) && palo_muestra == palo_c1) {
            las_2_muestras.push("c1")
        } else {
            no_muestra += "c1"
        }
        if (pal12.includes(num_c2) && palo_muestra == palo_c2) {
            las_2_muestras.push("c2")
        } else {
            no_muestra += "c2"
        }
        if (pal12.includes(num_c3) && palo_muestra == palo_c3) {
            las_2_muestras.push("c3")
        } else {
            no_muestra += "c3"
        }


        var valorC1 = 0
        var valorC2 = 0
        var valorC3 = 0

        //Cambia el valor de la carta por el valor de la muestra si es el 12
        if (num_c1 == 12) {
            valorC1 = valores[num_muestra];
        } else {
            valorC1 = valores[num_c1];
        }
        if (num_c2 == 12) {
            valorC2 = valores[num_muestra];
        } else {
            valorC2 = valores[num_c2];
        } if (num_c3 == 12) {
            valorC3 = valores[num_muestra];
        } else {
            valorC3 = valores[num_c3];
        }

        var muestra_mayor = 0
        var muestra_menor = 0 //que pasa si 11 10, quien es mas grande

        //Identificar la mayor de las 2 muestras
        if (las_2_muestras.includes("c1")) {
            if (las_2_muestras.includes("c2")) {
                muestra_mayor = Math.max(valorC1, valorC2) // C1 y C2 son las muestras
                muestra_menor = Math.min(valorC1, valorC2)
            } else {
                muestra_mayor = Math.max(valorC1, valorC3) // C1 y C3 son las muestras
                muestra_menor = Math.min(valorC1, valorC3)
            }
        } else {
            // No es C1 la muestra
            muestra_mayor = Math.max(valorC2, valorC3) // C2 y C3 son las muestras
            muestra_menor = Math.min(valorC2, valorC3)
        }

        //Caso de 10 y 11, que más grande sea el 11.
        // if (muestra_mayor == muestra_menor) {
        //     if (muestra_mayor == valorC1 && num_c1==10) {
        //         if (muestra_menor == valorC2 && num_c2 == 11) {
        //             muestra_mayor = valores[num_c2]
        //             muestra_menor = valores[num_c1]
        //         }
        //     }
        //     if (muestra_mayor == valorC2 && num_c2==10) {

        //     }
        //     if (muestra_mayor == valorC3 && num_c3==10) {

        //     }
        // }


        //Con 12
        if (muestra_mayor === valorC1) {
            //Sumamos el valor absoluto de la muestra 
            switch (num_c1) {
                case 2:
                    if (palo_c1 == palo_muestra) {
                        totalFlor += valores[num_c1]
                        explicacion += "\nSe suma 30 por el " + num_c1 + " de " + palo_muestra
                    }
                    break;
                case 4:
                    if (palo_c1 == palo_muestra) {
                        totalFlor += valores[num_c1]
                        explicacion += "\nSe suma 29 por el " + num_c1 + " de " + palo_muestra
                    }
                    break;
                case 5:
                    if (palo_c1 == palo_muestra) {
                        totalFlor += valores[num_c1]
                        explicacion += "\nSe suma 28 por el " + num_c1 + " de" + palo_muestra
                    }
                    break;
                case 11:
                    if (palo_c1 == palo_muestra) {
                        totalFlor += valores[num_c1]
                        explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                    }
                    break;
                case 10:
                    if (palo_c1 == palo_muestra) {
                        totalFlor += valores[num_c1]
                        explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                    }
                    break;
                case 12:
                    if (palo_c1 == palo_muestra) {
                        totalFlor += valores[num_muestra]
                        explicacion += "\nSe suma " + valores[num_muestra] + " por el " + num_muestra + " de " + palo_muestra
                    }
                    break;
                default:
                    break;
            }
            //Sumamos el total - 20 de la segunda muestra
            if (muestra_menor === valorC2) {
                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_muestra] - 20)
                            explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                //Sumamos lo restante de la no muestra
                switch (num_c3) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        break;
                    default:
                        break;
                        var resultado = totalFlor + explicacion
                        return resultado
                }
                var resultado = totalFlor + explicacion
                return resultado
            }
            //Sumamos el total - 20 de la segunda muestra
            if (muestra_menor === valorC3) {
                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_muestra] - 20)
                            explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                //Sumamos lo restante de la no muestra
                switch (num_c2) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        break;
                    default:
                        break;
                        var resultado = totalFlor + explicacion
                        return resultado
                }
                var resultado = totalFlor + explicacion
                return resultado
            }

        } else if (muestra_mayor === valorC2) {
            //Sumamos el valor absoluto de la muestra 
            switch (num_c2) {
                case 2:
                    if (palo_c2 == palo_muestra) {
                        totalFlor += valores[num_c2]
                        explicacion += "\nSe suma 30 por el " + num_c2 + " de " + palo_muestra
                    }
                    break;
                case 4:
                    if (palo_c2 == palo_muestra) {
                        totalFlor += valores[num_c2]
                        explicacion += "\nSe suma 29 por el " + num_c2 + " de " + palo_muestra
                    }
                    break;
                case 5:
                    if (palo_c2 == palo_muestra) {
                        totalFlor += valores[num_c2]
                        explicacion += "\nSe suma 28 por el " + num_c2 + " de" + palo_muestra
                    }
                    break;
                case 11:
                    if (palo_c2 == palo_muestra) {
                        totalFlor += valores[num_c2]
                        explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                    }
                    break;
                case 10:
                    if (palo_c2 == palo_muestra) {
                        totalFlor += valores[num_c2]
                        explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                    }
                    break;
                case 12:
                    if (palo_c2 == palo_muestra) {
                        totalFlor += valores[num_muestra]
                        explicacion += "\nSe suma " + valores[num_muestra] + " por el " + num_muestra + " de " + palo_muestra
                    }
                    break;
                default:
                    break;
            }
            //Sumamos el total - 20 de la segunda muestra
            if (muestra_menor === valorC1) {//C2 y C1
                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_muestra] - 20)
                            explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                //Sumamos lo restante de la no muestra
                switch (num_c3) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        break;
                    default:
                        break;
                        var resultado = totalFlor + explicacion
                        return resultado

                }
                var resultado = totalFlor + explicacion
                return resultado
            }
            //Sumamos el total - 20 de la segunda muestra
            if (muestra_menor === valorC3) { //C2 y C3
                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_muestra] - 20)
                            explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                //Sumamos lo restante de la no muestra
                switch (num_c1) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        break;
                    default:
                        break;
                        var resultado = totalFlor + explicacion
                        return resultado
                }
                var resultado = totalFlor + explicacion
                return resultado
            }
        } else { //muestra_mayor === valorC3
            //Sumamos el valor absoluto de la muestra mayor
            switch (num_c3) {
                case 2:
                    if (palo_c3 == palo_muestra) {
                        totalFlor += valores[num_c3]
                        explicacion += "\nSe suma 30 por el " + num_c3 + " de " + palo_muestra
                    }
                    break;
                case 4:
                    if (palo_c3 == palo_muestra) {
                        totalFlor += valores[num_c3]
                        explicacion += "\nSe suma 29 por el " + num_c3 + " de " + palo_muestra
                    }
                    break;
                case 5:
                    if (palo_c3 == palo_muestra) {
                        totalFlor += valores[num_c3]
                        explicacion += "\nSe suma 28 por el " + num_c3 + " de" + palo_muestra
                    }
                    break;
                case 11:
                    if (palo_c3 == palo_muestra) {
                        totalFlor += valores[num_c3]
                        explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                    }
                    break;
                case 10:
                    if (palo_c3 == palo_muestra) {
                        totalFlor += valores[num_c3]
                        explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                    }
                    break;
                case 12:
                    if (palo_c3 == palo_muestra) {
                        totalFlor += valores[num_muestra]
                        explicacion += "\nSe suma " + valores[num_muestra] + " por el " + num_muestra + " de " + palo_muestra
                    }
                    break;
                default:
                    break;
            }
            //Sumamos el total - 20 de la segunda muestra menor
            if (muestra_menor === valorC2) { //C3 y C2
                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_muestra] - 20)
                            explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                //Sumamos lo restante de la no muestra
                switch (num_c1) { //C1
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        break;
                    default:
                        break;
                        var resultado = totalFlor + explicacion
                        return resultado
                }
            }
            //Sumamos el total - 20 de la segunda muestra
            if (muestra_menor === valorC1) {//C3 y C1
                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_muestra] - 20)
                            explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                //Sumamos lo restante de la no muestra
                switch (num_c2) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        break;
                    default:
                        break;
                        var resultado = totalFlor + explicacion
                        return resultado
                }
            }
        }



    } else {
        //No se puede usar el 12

        //Identifica las 2 muestras y la que no es muestra
        if (muestras.includes(num_c1) && palo_muestra == palo_c1) {
            las_2_muestras.push("c1")
        } else {
            no_muestra += "c1"
        }
        if (muestras.includes(num_c2) && palo_muestra == palo_c2) {
            las_2_muestras.push("c2")
        } else {
            no_muestra += "c2"
        }
        if (muestras.includes(num_c3) && palo_muestra == palo_c3) {
            las_2_muestras.push("c3")
        } else {
            no_muestra += "c3"
        }

        //Valores de las muestras absolutos
        var valorC1 = valores[num_c1]
        var valorC2 = valores[num_c2]
        var valorC3 = valores[num_c3]

        var muestra_mayor = 0
        var muestra_menor = 0 //que pasa si 11 10, quien es mas grande

        //Identificar la mayor de las 2 muestras
        if (las_2_muestras.includes("c1")) {
            if (las_2_muestras.includes("c2")) {
                muestra_mayor = Math.max(valorC1, valorC2) // C1 y C2 son las muestras
                muestra_menor = Math.min(valorC1, valorC2)
            } else {
                muestra_mayor = Math.max(valorC1, valorC3) // C1 y C3 son las muestras
                muestra_menor = Math.min(valorC1, valorC3)
            }
        } else {
            // No es C1 la muestra
            muestra_mayor = Math.max(valorC2, valorC3) // C2 y C3 son las muestras
            muestra_menor = Math.min(valorC2, valorC3)
        }


        //Sin 12
        if (muestra_mayor === valorC1) {
            //Sumamos el valor absoluto de la muestra 
            switch (num_c1) {
                case 2:
                    if (palo_c1 == palo_muestra) {
                        totalFlor += valores[num_c1]
                        explicacion += "\nSe suma 30 por el " + num_c1 + " de " + palo_muestra
                    }
                    break;
                case 4:
                    if (palo_c1 == palo_muestra) {
                        totalFlor += valores[num_c1]
                        explicacion += "\nSe suma 29 por el " + num_c1 + " de " + palo_muestra
                    }
                    break;
                case 5:
                    if (palo_c1 == palo_muestra) {
                        totalFlor += valores[num_c1]
                        explicacion += "\nSe suma 28 por el " + num_c1 + " de" + palo_muestra
                    }
                    break;
                case 11:
                    if (palo_c1 == palo_muestra) {
                        totalFlor += valores[num_c1]
                        explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                    }
                    break;
                case 10:
                    if (palo_c1 == palo_muestra) {
                        totalFlor += valores[num_c1]
                        explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                    }
                    break;
                default:
                    break;
            }
            //Sumamos el total - 20 de la segunda muestra
            if (muestra_menor === valorC2) {
                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                //Sumamos lo restante de la no muestra
                switch (num_c3) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        break;
                    default:
                        break;
                        var resultado = totalFlor + explicacion
                        return resultado
                }
                var resultado = totalFlor + explicacion
                return resultado
            }
            //Sumamos el total - 20 de la segunda muestra
            if (muestra_menor === valorC3) {
                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                //Sumamos lo restante de la no muestra
                switch (num_c2) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        break;
                    default:
                        break;
                        var resultado = totalFlor + explicacion
                        return resultado
                }
                var resultado = totalFlor + explicacion
                return resultado
            }

        } else if (muestra_mayor === valorC2) {
            //Sumamos el valor absoluto de la muestra 
            switch (num_c2) {
                case 2:
                    if (palo_c2 == palo_muestra) {
                        totalFlor += valores[num_c2]
                        explicacion += "\nSe suma 30 por el " + num_c2 + " de " + palo_muestra
                    }
                    break;
                case 4:
                    if (palo_c2 == palo_muestra) {
                        totalFlor += valores[num_c2]
                        explicacion += "\nSe suma 29 por el " + num_c2 + " de " + palo_muestra
                    }
                    break;
                case 5:
                    if (palo_c2 == palo_muestra) {
                        totalFlor += valores[num_c2]
                        explicacion += "\nSe suma 28 por el " + num_c2 + " de" + palo_muestra
                    }
                    break;
                case 11:
                    if (palo_c2 == palo_muestra) {
                        totalFlor += valores[num_c2]
                        explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                    }
                    break;
                case 10:
                    if (palo_c2 == palo_muestra) {
                        totalFlor += valores[num_c2]
                        explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                    }
                    break;
                default:
                    break;
            }
            //Sumamos el total - 20 de la segunda muestra
            if (muestra_menor === valorC1) {//C2 y C1
                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                //Sumamos lo restante de la no muestra
                switch (num_c3) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        break;
                    default:
                        break;
                        var resultado = totalFlor + explicacion
                        return resultado

                }
                var resultado = totalFlor + explicacion
                return resultado
            }
            //Sumamos el total - 20 de la segunda muestra
            if (muestra_menor === valorC3) { //C2 y C3
                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                //Sumamos lo restante de la no muestra
                switch (num_c1) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        break;
                    default:
                        break;
                        var resultado = totalFlor + explicacion
                        return resultado
                }
                var resultado = totalFlor + explicacion
                return resultado
            }
        } else { //muestra_mayor === valorC3
            //Sumamos el valor absoluto de la muestra mayor
            switch (num_c3) {
                case 2:
                    if (palo_c3 == palo_muestra) {
                        totalFlor += valores[num_c3]
                        explicacion += "\nSe suma 30 por el " + num_c3 + " de " + palo_muestra
                    }
                    break;
                case 4:
                    if (palo_c3 == palo_muestra) {
                        totalFlor += valores[num_c3]
                        explicacion += "\nSe suma 29 por el " + num_c3 + " de " + palo_muestra
                    }
                    break;
                case 5:
                    if (palo_c3 == palo_muestra) {
                        totalFlor += valores[num_c3]
                        explicacion += "\nSe suma 28 por el " + num_c3 + " de" + palo_muestra
                    }
                    break;
                case 11:
                    if (palo_c3 == palo_muestra) {
                        totalFlor += valores[num_c3]
                        explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                    }
                    break;
                case 10:
                    if (palo_c3 == palo_muestra) {
                        totalFlor += valores[num_c3]
                        explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                    }
                    break;
                default:
                    break;
            }
            //Sumamos el total - 20 de la segunda muestra menor
            if (muestra_menor === valorC2) { //C3 y C2
                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                //Sumamos lo restante de la no muestra
                switch (num_c1) { //C1
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        break;
                    default:
                        break;
                        var resultado = totalFlor + explicacion
                        return resultado
                }
            }
            //Sumamos el total - 20 de la segunda muestra
            if (muestra_menor === valorC1) {//C3 y C1
                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 10 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 9 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 8 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += (valores[num_c1] - 20)
                            explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }
                //Sumamos lo restante de la no muestra
                switch (num_c2) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        break;
                    default:
                        break;
                        var resultado = totalFlor + explicacion
                        return resultado
                }
            }
        }

    }

}

function flor1Muestra(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3, explicacion) {
    valores = { 2: 30, 4: 29, 5: 28, 11: 27, 10: 27 }
    var totalFlor = 0
    var muestras = [2, 4, 5, 10, 11];
    var pal12 = [2, 4, 5, 10, 11, 12];

    var las_2_no_muestras = []
    var la_muestra = ""

    if (muestras.includes(num_muestra)) {
        //12

        //Identifica la muestra y las 2 que no son muestras
        if (pal12.includes(num_c1) && palo_muestra == palo_c1) {
            la_muestra = num_c1
            las_2_no_muestras.push("c2")
            las_2_no_muestras.push("c3")
        } 
        if (pal12.includes(num_c2) && palo_muestra == palo_c2) {
            la_muestra = num_c2
            las_2_no_muestras.push("c1")
            las_2_no_muestras.push("c3")
        }
        if (pal12.includes(num_c3) && palo_muestra == palo_c3) {
            la_muestra = num_c3
            las_2_no_muestras.push("c1")
            las_2_no_muestras.push("c2")
        }



        if (la_muestra == num_c1) {
            if (palo_c2 == palo_c3) {
                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 30 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 29 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 28 por el " + num_c1 + " de" + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_muestra]
                            explicacion += "\nSe suma " + valores[num_muestra] + " por el " + num_muestra + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }

                //Cuenta segunda carta
                switch (num_c2) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        break;
                    default:
                        break;
                }
                //Cuenta tercera carta
                switch (num_c3) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        break;
                    default:
                        break;
                }
                var resultado = totalFlor + explicacion
                return resultado
            }
        } else if (la_muestra == num_c2) {
            if (palo_c1 == palo_c3) {
                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += valores[num_c2]
                            explicacion += "\nSe suma 30 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += valores[num_c2]
                            explicacion += "\nSe suma 29 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += valores[num_c2]
                            explicacion += "\nSe suma 28 por el " + num_c2 + " de" + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += valores[num_c2]
                            explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += valores[num_c2]
                            explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += valores[num_muestra]
                            explicacion += "\nSe suma " + valores[num_muestra] + " por el " + num_muestra + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }

                //Cuenta segunda carta
                switch (num_c1) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        break;
                    default:
                        break;
                }
                //Cuenta tercera carta
                switch (num_c3) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        break;
                    default:
                        break;
                }
                var resultado = totalFlor + explicacion
                return resultado
            }
        } else {
            if (palo_c1 == palo_c2) {
                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += valores[num_c3]
                            explicacion += "\nSe suma 30 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += valores[num_c3]
                            explicacion += "\nSe suma 29 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += valores[num_c3]
                            explicacion += "\nSe suma 28 por el " + num_c3 + " de" + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += valores[num_c3]
                            explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += valores[num_c3]
                            explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += valores[num_muestra]
                            explicacion += "\nSe suma " + valores[num_muestra] + " por el " + num_muestra + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }

                //Cuenta segunda carta
                switch (num_c1) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        break;
                    default:
                        break;
                }
                //Cuenta tercera carta
                switch (num_c2) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        break;
                    default:
                        break;
                }
                var resultado = totalFlor + explicacion
                return resultado
            }
        }
    } else {
        //No 12

        //Identifica la muestra y las 2 que no son muestras
        if (muestras.includes(num_c1) && palo_muestra == palo_c1) {
            la_muestra = num_c1
            las_2_no_muestras.push("c2")
            las_2_no_muestras.push("c3")
        }
        if (muestras.includes(num_c2) && palo_muestra == palo_c2) {
            la_muestra = num_c2
            las_2_no_muestras.push("c1")
            las_2_no_muestras.push("c3")
        } 
        if (muestras.includes(num_c3) && palo_muestra == palo_c3) {
            la_muestra = num_c3
            las_2_no_muestras.push("c1")
            las_2_no_muestras.push("c2")
        } 

        if (la_muestra == num_c1) {
            if (palo_c2 == palo_c3) {
                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 30 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 29 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 28 por el " + num_c1 + " de" + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                            explicacion += "\nSe suma 27 por el " + num_c1 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }

                //Cuenta segunda carta
                switch (num_c2) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        break;
                    default:
                        break;
                }
                //Cuenta tercera carta
                switch (num_c3) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        break;
                    default:
                        break;
                }
                var resultado = totalFlor + explicacion
                return resultado
            }
        } else if (la_muestra == num_c2) {
            if (palo_c1 == palo_c3) {
                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += valores[num_c2]
                            explicacion += "\nSe suma 30 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += valores[num_c2]
                            explicacion += "\nSe suma 29 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += valores[num_c2]
                            explicacion += "\nSe suma 28 por el " + num_c2 + " de" + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += valores[num_c2]
                            explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += valores[num_c2]
                            explicacion += "\nSe suma 27 por el " + num_c2 + " de " + palo_muestra
                        }
                        break;
                    case 12:
                    default:
                        break;
                }

                //Cuenta segunda carta
                switch (num_c1) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        break;
                    default:
                        break;
                }
                //Cuenta tercera carta
                switch (num_c3) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                        break;
                    default:
                        break;
                }
                var resultado = totalFlor + explicacion
                return resultado
            }
        } else {
            if (palo_c1 == palo_c2) {
                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += valores[num_c3]
                            explicacion += "\nSe suma 30 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += valores[num_c3]
                            explicacion += "\nSe suma 29 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += valores[num_c3]
                            explicacion += "\nSe suma 28 por el " + num_c3 + " de" + palo_muestra
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += valores[num_c3]
                            explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += valores[num_c3]
                            explicacion += "\nSe suma 27 por el " + num_c3 + " de " + palo_muestra
                        }
                        break;
                    default:
                        break;
                }

                //Cuenta segunda carta
                switch (num_c1) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                        break;
                    default:
                        break;
                }
                //Cuenta tercera carta
                switch (num_c2) {
                    case 1:
                        totalFlor += 1
                        explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 2:
                        totalFlor += 2
                        explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 3:
                        totalFlor += 3
                        explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 4:
                        totalFlor += 4
                        explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 5:
                        totalFlor += 5
                        explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 6:
                        totalFlor += 6
                        explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                        break;
                    case 7:
                        totalFlor += 7
                        explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                        break;
                    default:
                        break;
                }
                var resultado = totalFlor + explicacion
                return resultado
            }
        }

    }
}

function flor0Muestras(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3, explicacion) {
    valores = { 2: 30, 4: 29, 5: 28, 11: 27, 10: 27 }
    var totalFlor = 0
    var muestras = [2, 4, 5, 10, 11];


    var no_debe_haber_muestras = []

    if (muestras.includes(num_c1)) {
        if (palo_c1 == palo_muestra) {
            no_debe_haber_muestras.push(num_c1)
        }
    }
    if (muestras.includes(num_c2)) {
        if (palo_c2 == palo_muestra) {
            no_debe_haber_muestras.push(num_c2)
        }
    }
    if (muestras.includes(num_c3)) {
        if (palo_c3 == palo_muestra) {
            no_debe_haber_muestras.push(num_c3)
        }
    }

    if (no_debe_haber_muestras.length == 0 && palo_c1 == palo_c2 && palo_c1 == palo_c3) {
        //Cuenta primera carta
        switch (num_c1) {
            case 1:
                totalFlor += 1
                explicacion += "\nSe suma 1 por el " + num_c1 + " de " + palo_c1
                break;
            case 2:
                totalFlor += 2
                explicacion += "\nSe suma 2 por el " + num_c1 + " de " + palo_c1
                break;
            case 3:
                totalFlor += 3
                explicacion += "\nSe suma 3 por el " + num_c1 + " de " + palo_c1
                break;
            case 4:
                totalFlor += 4
                explicacion += "\nSe suma 4 por el " + num_c1 + " de " + palo_c1
                break;
            case 5:
                totalFlor += 5
                explicacion += "\nSe suma 5 por el " + num_c1 + " de " + palo_c1
                break;
            case 6:
                totalFlor += 6
                explicacion += "\nSe suma 6 por el " + num_c1 + " de " + palo_c1
                break;
            case 7:
                totalFlor += 7
                explicacion += "\nSe suma 7 por el " + num_c1 + " de " + palo_c1
                break;
            default:
                break;

        }
        //Cuenta segunda carta
        switch (num_c2) {
            case 1:
                totalFlor += 1
                explicacion += "\nSe suma 1 por el " + num_c2 + " de " + palo_c2
                break;
            case 2:
                totalFlor += 2
                explicacion += "\nSe suma 2 por el " + num_c2 + " de " + palo_c2
                break;
            case 3:
                totalFlor += 3
                explicacion += "\nSe suma 3 por el " + num_c2 + " de " + palo_c2
                break;
            case 4:
                totalFlor += 4
                explicacion += "\nSe suma 4 por el " + num_c2 + " de " + palo_c2
                break;
            case 5:
                totalFlor += 5
                explicacion += "\nSe suma 5 por el " + num_c2 + " de " + palo_c2
                break;
            case 6:
                totalFlor += 6
                explicacion += "\nSe suma 6 por el " + num_c2 + " de " + palo_c2
                break;
            case 7:
                totalFlor += 7
                explicacion += "\nSe suma 7 por el " + num_c2 + " de " + palo_c2
                break;
            default:
                break;
        }
        //Cuenta tercera carta
        switch (num_c3) {
            case 1:
                totalFlor += 1
                explicacion += "\nSe suma 1 por el " + num_c3 + " de " + palo_c3
                break;
            case 2:
                totalFlor += 2
                explicacion += "\nSe suma 2 por el " + num_c3 + " de " + palo_c3
                break;
            case 3:
                totalFlor += 3
                explicacion += "\nSe suma 3 por el " + num_c3 + " de " + palo_c3
                break;
            case 4:
                totalFlor += 4
                explicacion += "\nSe suma 4 por el " + num_c3 + " de " + palo_c3
                break;
            case 5:
                totalFlor += 5
                explicacion += "\nSe suma 5 por el " + num_c3 + " de " + palo_c3
                break;
            case 6:
                totalFlor += 6
                explicacion += "\nSe suma 6 por el " + num_c3 + " de " + palo_c3
                break;
            case 7:
                totalFlor += 7
                explicacion += "\nSe suma 7 por el " + num_c3 + " de " + palo_c3
                break;
            default:
                break;
        }
        var resultado = totalFlor + explicacion
        return resultado
    } else {
        return undefined
    }
}