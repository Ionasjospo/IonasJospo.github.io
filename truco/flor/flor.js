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



    if (noNulas(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3) == true) {
        if (distintasCartas(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3) == true) {
            var explicacion = ""
            var flor3 = flor3Muestras(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3, explicacion)
            if (flor3 != 0 || flor3 == !undefined) {
                alert(flor3)
                return flor3
            }
            var flor2 = flor2Muestras(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3, explicacion)
            if (flor2 != 0 || flor2 == !undefined) {
                alert(flor2)
                return flor2
            }
            var flor1 = flor1Muestras(numeroMuestra, palo_muestra, numCarta1, palo_carta1, numCarta2, palo_carta2, numCarta3, palo_carta3, explicacion)
            if (flor1 != 0 || flor1 == !undefined) {
                alert(flor1)
                return flor1
            }
        } else {
            alert("No pueden haber cartas duplicadas.");
        }
    } else {
        alert("Faltan cartas, revisa las casillas.");
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
                                explicacion += "\nSe suma 29 por el " + num_c1 + " de " +  palo_muestra
                            }
                            break;
                        case 5:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += valores[num_c1]
                                explicacion += "\nSe suma 28 por el " + num_c1 + " de"+ palo_muestra
                            }
                            break;
                        case 11:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += valores[num_c1]
                                explicacion += "\nSe suma 27 por el" + num_c1 + " de " + palo_muestra
                            }
                            break;
                        case 10:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += valores[num_c1]
                                explicacion += "\nSe suma 27 por el " + num_c1 + " de "+ palo_muestra
                            }
                            break;
                        case 12:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += valores[num_muestra]
                                explicacion += "\nSe suma " + valores[num_muestra] + " por el " + num_muestra + " de "+ palo_muestra
                            }
                            break;
                        default:
                            break;
                    }

                    switch (num_c2) {
                        case 2:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "Se suma 10 por el" + num_c2 + palo_muestra + "\n"
                            }
                            break;
                        case 4:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "Se suma 9 por el" + num_c2 + palo_muestra + "\n"
                            }
                            break;
                        case 5:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "Se suma 8 por el" + num_c2 + palo_muestra + "\n"
                            }
                            break;
                        case 11:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "Se suma 7 por el" + num_c2 + palo_muestra + "\n"
                            }
                            break;
                        case 10:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_c2] - 20)
                                explicacion += "Se suma 7 por el" + num_c2 + palo_muestra + "\n"
                            }
                            break;
                        case 12:
                            if (palo_c2 == palo_muestra) {
                                totalFlor += (valores[num_muestra] - 20)
                                explicacion += "Se suma" + (valores[num_muestra] - 20) + "por el" + num_c2 + palo_muestra + "\n"
                            }
                            break;
                        default:
                            break;
                    }

                    switch (num_c3) {
                        case 2:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 10 por el " + num_c3 + " de " + palo_muestra + "\n"
                            }
                            break;
                        case 4:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 9 por el " + num_c3 +" de " + palo_muestra + "\n"
                            }
                            break;
                        case 5:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 8 por el " + num_c3 +" de " + palo_muestra + "\n"
                            }
                            break;
                        case 11:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\n Se suma 7 por el" + num_c3 + " de " + palo_muestra + "\n"
                            }
                            break;
                        case 10:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c3 +" de " +  palo_muestra + "\n"
                            }
                            break;
                        case 12:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_muestra] - 20)
                                explicacion += "\nSe suma " + (valores[num_muestra] - 20) + " por el " + num_c3 + " de "+ palo_muestra + "\n"
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
                                explicacion += "\nSe suma 10 por el " + num_c1 + " " + palo_muestra
                            }
                            break;
                        case 4:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 9 por el " + num_c1 + " " + palo_muestra
                            }
                            break;
                        case 5:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 8 por el " + num_c1 + " " + palo_muestra
                            }
                            break;
                        case 11:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c1 + " " + palo_muestra
                            }
                            break;
                        case 10:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_c1] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c1 + " " + palo_muestra
                            }
                            break;
                        case 12:
                            if (palo_c1 == palo_muestra) {
                                totalFlor += (valores[num_muestra] - 20)
                                explicacion += "\nSe suma" + (valores[num_muestra] - 20) + " por el " + num_c1 + " " + palo_muestra
                            }
                            break;
                        default:
                            break;
                    }

                    switch (num_c3) {
                        case 2:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 10 por el " + num_c3 + " " + palo_muestra
                            }
                            break;
                        case 4:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 9 por el " + num_c3 + " " + palo_muestra
                            }
                            break;
                        case 5:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 8 por el " + num_c3 + " " + palo_muestra
                            }
                            break;
                        case 11:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c3 + " " + palo_muestra
                            }
                            break;
                        case 10:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_c3] - 20)
                                explicacion += "\nSe suma 7 por el " + num_c3 + " " + palo_muestra
                            }
                            break;
                        case 12:
                            if (palo_c3 == palo_muestra) {
                                totalFlor += (valores[num_muestra] - 20)
                                explicacion += "\nSe suma" + (valores[num_muestra] - 20) + " por el " + num_c3 + " " + palo_muestra
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
                                explicacion += "\nSe suma" + (valores[num_muestra]) + " por el " + num_c3 + " de " + palo_muestra
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
                                totalFlor += (valores[num_muestra]-20)
                                explicacion += "\nSe suma "+  (valores[num_muestra]-20)+" por el " + num_c1 + " de " + palo_muestra
                                
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
                                explicacion += "\nSe suma" +(valores[num_muestra] - 20)+ " por el " + num_c2 + " de " + palo_muestra
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
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    default:
                        break;
                }

                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    default:
                        break;
                }

                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
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
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    default:
                        break;
                }

                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    default:
                        break;
                }

                switch (num_c3) {
                    case 2:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
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
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    case 4:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    case 5:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    case 11:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    case 10:
                        if (palo_c3 == palo_muestra) {
                            totalFlor += (valores[num_c3] - 20)
                        }
                        break;
                    default:
                        break;
                }

                switch (num_c1) {
                    case 2:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    case 4:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    case 5:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    case 11:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    case 10:
                        if (palo_c1 == palo_muestra) {
                            totalFlor += valores[num_c1]
                        }
                        break;
                    default:
                        break;
                }

                switch (num_c2) {
                    case 2:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    case 4:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    case 5:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    case 11:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
                        }
                        break;
                    case 10:
                        if (palo_c2 == palo_muestra) {
                            totalFlor += (valores[num_c2] - 20)
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

}

function flor0Muestras(num_muestra, palo_muestra, num_c1, palo_c1, num_c2, palo_c2, num_c3, palo_c3, explicacion) {

}