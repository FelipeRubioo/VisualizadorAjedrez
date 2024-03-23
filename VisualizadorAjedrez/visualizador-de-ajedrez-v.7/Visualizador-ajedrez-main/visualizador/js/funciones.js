
function reglas() {
  alert(`Notación de piezas:

    Rey: K
    Reina: Q
    Torre: R
    Alfil: B
    Caballo: N
    Peón: no se indica ninguna letra (por ejemplo, e4)
    Notación de columnas:
    
    Las columnas se indican con letras de la "a" a la "h". La columna más a la izquierda es la "a" y la columna más a la derecha es la "h".
    Notación de filas:
    
    Las filas se indican con números del 1 al 8. El lado de las blancas está en las filas 1 y 2, mientras que el lado de las negras está en las filas 7 y 8.
    Notación de movimientos:
    
    Se utiliza la notación abreviada de la pieza seguida de la casilla a la que se mueve. Por ejemplo, Re4 significa que el Rey se mueve a la casilla e4.
    Capturas:
    
    Cuando una pieza captura a otra, se utiliza "x" para indicar la captura. Por ejemplo, Bxe4 significa que el Alfil captura en la casilla e4.
    Enroque:
    
    El enroque corto se indica con O-O y el enroque largo se indica con O-O-O.
    Peones:
    
    Cuando un peón avanza sin capturar, solo se indica la casilla de destino. Por ejemplo, e4 significa que el peón se mueve a e4.
    Promoción de peones:
    
    Cuando un peón alcanza la octava fila, se promociona a otra pieza (generalmente una reina). La promoción se indica agregando la letra de la pieza deseada después del movimiento del peón. Por ejemplo, e8=Q significa que el peón en e8 se promociona a una reina.
    Jaque:
    
    Se indica con el símbolo "+" al final del movimiento. Por ejemplo, Nf7+ significa que el Caballo ha dado jaque.
    Jaque mate:
    
    Se indica con el símbolo "#" al final del movimiento. Por ejemplo, Qh8# significa que la Reina ha dado jaque mate.`);
}

//funcion que corre al cargar la pagina
//se ponen las piezas en el tablero 
function iniciar() {
  //declaramos las variables como globales(window) para accederlas de otras funciones
  window.alfilB = "background-image: url(./img/AlfilB.png); background-size:cover;";
  window.alfilN = "background-image: url(./img/AlfilN.png); background-size:cover;";
  window.caballoB = "background-image: url(./img/CaballoB.png); background-size:cover;";
  window.caballoN = "background-image: url(./img/CaballoN.png); background-size:cover;";
  window.peonB = "background-image: url(./img/PeonB.png); background-size:cover;";
  window.peonN = "background-image: url(./img/PeonN.png); background-size:cover;";
  window.reinaB = "background-image: url(./img/ReinaB.png); background-size:cover;";
  window.reinaN = "background-image: url(./img/ReinaN.png); background-size:cover;";
  window.reyB = "background-image: url(./img/ReyB.png); background-size:cover;";
  window.reyN = "background-image: url(./img/ReyN.png); background-size:cover;";
  window.torreB = "background-image: url(./img/TorreB.png); background-size:cover;";
  window.torreN = "background-image: url(./img/TorreN.png); background-size:cover;";
  window.celdaVacia = "background-image: none; background-size:cover;";
  window.tablero = document.getElementById("tablero");

  //ponemos peones negros
  tablero.rows[2].cells[1].style = peonN;
  tablero.rows[2].cells[2].style = peonN;
  tablero.rows[2].cells[3].style = peonN;
  tablero.rows[2].cells[4].style = peonN;
  tablero.rows[2].cells[5].style = peonN;
  tablero.rows[2].cells[6].style = peonN;
  tablero.rows[2].cells[7].style = peonN;
  tablero.rows[2].cells[8].style = peonN;
  //torres negras
  tablero.rows[1].cells[8].style = torreN;
  tablero.rows[1].cells[1].style = torreN;
  //caballos negros
  tablero.rows[1].cells[2].style = caballoN;
  tablero.rows[1].cells[7].style = caballoN;
  //alfiles negros
  tablero.rows[1].cells[6].style = alfilN;
  tablero.rows[1].cells[3].style = alfilN;
  //Reina negra
  tablero.rows[1].cells[5].style = reinaN;
  //Rey negro
  tablero.rows[1].cells[4].style = reyN;


  //peones blancos
  tablero.rows[7].cells[1].style = peonB;
  tablero.rows[7].cells[2].style = peonB;
  tablero.rows[7].cells[3].style = peonB;
  tablero.rows[7].cells[4].style = peonB;
  tablero.rows[7].cells[5].style = peonB;
  tablero.rows[7].cells[6].style = peonB;
  tablero.rows[7].cells[7].style = peonB;
  tablero.rows[7].cells[8].style = peonB;
  //torres blancas
  tablero.rows[8].cells[1].style = torreB;
  tablero.rows[8].cells[8].style = torreB;
  //caballos blancos
  tablero.rows[8].cells[2].style = caballoB;
  tablero.rows[8].cells[7].style = caballoB;
  //alfiles blancos
  tablero.rows[8].cells[3].style = alfilB;
  tablero.rows[8].cells[6].style = alfilB;
  //reina blanca
  tablero.rows[8].cells[5].style = reinaB;
  //rey blanco
  tablero.rows[8].cells[4].style = reyB;



}

function partidas() {
  var textarea = document.getElementById("texto");
  var valor = document.getElementById("Combo").value;

  switch (valor) {
    case "0":
      textarea.value = "";
      break;
    case "1":
      textarea.value = "Partida 1";
      break;
    case "2":
      textarea.value = "Partida 2";
      break;
    case "3":
      textarea.value = "Partida 3";
      break;
    default:
      break;
  }
}

function cargarPartida() {
  var archivo = document.getElementById("cargarBoton").files[0];
  var scanner = new FileReader();

  scanner.onload = function (e) {
    document.getElementById("textarea1").value = e.target.result;
    /*document.getElementById("texto").value = document.getElementById("cargarBoton").files;*/
  };
  scanner.readAsText(archivo);
  removernumero();
  getTokens();
}


function pasoAPaso() {
  var numeroMovimientos = 0;
  var movimientoBlanco = ""
  var contadorText = 0
  var AreaTexto = document.getElementById("textarea1");
  var valorTexto = AreaTexto.value;
  do {
    //vemos cuantos movimientos hay en el juego (filas)
    if (valorTexto[contadorText + 1] == ".") {
      numeroMovimientos++
      //capturamos el movimiento blanco, contadorText+3 es el primer caracter del movimiento blanco
      //11 porque no hay movimientos de ajedrez mayores a 11 caracteres
      contadorText = contadorText + 3
    } else {
      numeroMovimientos++
      contadorText = contadorText + 1
    }
    for (let i = 0; i < 11; i++) {

      movimientoBlanco += valorTexto[contadorText]
      //si el siguiente movimiento es " ", ya capturamos todo el movimiento blanco 
      if (valorTexto[contadorText + 1] == " ") {

        console.log("movimiento blanco: " + movimientoBlanco)
        break
      }
      contadorText++
    }
    //guardamos el movimiento de negro
  } while (contadorText < valorTexto.length);

  console.log("numero de movimientos: " + numeroMovimientos)
  celda1 = document.getElementById("1-8");
  celda1.style = peonN;
  celda1.style = " ";
}



function turno() {


}

function prueba() {
  var numeroMovimientos = 0;
  var movimientoBlanco = ""
  var movimientoNegro = ""
  var contadorText = 0
  var AreaTexto = document.getElementById("textarea1");
  var valorTexto = AreaTexto.value;
  do {
    //en este if nos queremos dirigir al movimiento blanco
    if (valorTexto[contadorText + 1] == "." && valorTexto[contadorText - 1] == "\n" || valorTexto[contadorText + 2] == "." && valorTexto[contadorText - 1] == "\n" || valorTexto[contadorText] == "1" && valorTexto[contadorText + 1] == ".") {
      numeroMovimientos++
      //capturamos el movimiento blanco, contadorText+3 es el primer caracter del movimiento blanco (en caso de que el numero de movimiento es entre 1 y 9)
      if (valorTexto[contadorText + 1] == "." && valorTexto[contadorText - 1] == "\n" || valorTexto[contadorText] == "1" && valorTexto[contadorText + 1] == ".") {
        contadorText = contadorText + 3
        //si el numero de movimiento es de dos digitos, se tiene que hacer contenedorText+4 para estar en el primer caracter del movimiento blanco
      } else if (valorTexto[contadorText + 2] == "." && valorTexto[contadorText - 1] == "\n") {
        contadorText = contadorText + 4
      }


      var elementos = obtenerMovimiento(contadorText)
      movimientoBlanco = elementos[0]
      contadorText = elementos[1]
      //se hace el movimiento en el tablero 
      movimiento(movimientoBlanco, "blanco")
    } else {
      numeroMovimientos++
      //capturamos el movimiento negro
      elementos = obtenerMovimiento(contadorText)
      movimientoNegro = elementos[0]
      contadorText = elementos[1]
      //se hace el movimiento en el tablero 
      movimiento(movimientoNegro, "negro")
    }

  } while (contadorText < valorTexto.length);
}

function obtenerMovimiento(contadorText) {
  var movimiento = ""
  var elementos = []
  var AreaTexto = document.getElementById("textarea1");
  var valorTexto = AreaTexto.value;
  for (let i = 0; i < 11; i++) {
    //si el caracter es vacio o un salto de linea, ya terminamos de capturar el movimiento
    if (valorTexto[contadorText] != " " && valorTexto[contadorText] != "\n") {
      movimiento += valorTexto[contadorText]
    } else {
      //se le suma aqui tambien para saltarse el espacion en blanco
      contadorText++
      break
    }
    contadorText++
  }
  elementos.push(movimiento)
  elementos.push(contadorText)
  return elementos
}

function movimiento(movimiento, color) {
  //en caso de que sean enroques
  var tipoEnroque = ""
  //enroque corto blancas
  if (movimiento == "O") {
    tipoEnroque = "cortoBlancas"
    enroque(tipoEnroque)
    //enroque corto negras
  } else if (movimiento == "O-O") {
    tipoEnroque = "cortoNegras"
    enroque(tipoEnroque)
    //enroque largo blancas
  } else if (movimiento == "O-O-O") {
    tipoEnroque = "largoBlancas"
    enroque(tipoEnroque)
    //enroque largo negras 
  } else if (movimiento == "O-O-O-O") {
    tipoEnroque = "largoNegras"
    enroque(tipoEnroque)

  } else {
    //se busca que tipo de pieza se posicionara en la nueva casilla 
    //blanco hace e4
    var pieza = detectarPieza(movimiento, color)
    //se busca cual sera la nueva casilla a hacer el desplazamiento 
    var casilla = detectarCasilla(movimiento)
    //determinamos que tipo de movimiento es (si es movimiento normal o captura)
    var tipoMovimiento = detectarTipoMovimiento(movimiento)
    //se hace movimiento de la pieza
    moverPieza(movimiento, pieza, casilla, tipoMovimiento)

  }

}

function detectarPieza(movimiento, color) {
  //la primera letra del movimiento nos indica que pieza es
  var pieza = movimiento[0]
  switch (pieza) {
    //Rey
    case "K":
      if (color == "blanco") {
        pieza = "reyB"
      } else if (color == "negro") {
        pieza = "reyN"
      }
      break;

    //Reina
    case "Q":
      if (color == "blanco") {
        pieza = "reinaB"
      } else if (color == "negro") {
        pieza = "reinaN"
      }

      break;
    //Torre
    case "R":
      if (color == "blanco") {
        pieza = "torreB"
      } else if (color == "negro") {
        pieza = "torreN"
      }
      break;

    //Alfil
    case "B":
      if (color == "blanco") {
        pieza = "alfilB"
      } else if (color == "negro") {
        pieza = "alfilN"
      }
      break;

    //Caballo
    case "N":
      if (color == "blanco") {
        pieza = "caballoB"
      } else if (color == "negro") {
        pieza = "caballoN"
      }
      break;

    //peon
    default:
      if (color == "blanco") {
        pieza = "peonB"
      } else if (color == "negro") {
        pieza = "peonN"
      }
      break;
  }
  return pieza
}

function detectarCasilla(movimiento) {
  //la casilla siempre seran los ultimos dos caracteres del movimiento a menos que el movimiento sea un enroque o el movimiento sea jaque (termina en +) o jaque mate (termina en #)
  var casilla = ""
  if (movimiento[movimiento.length - 1] == "+" || movimiento[movimiento.length - 1] == "#") {
    casilla = movimiento[movimiento.length - 3] + movimiento[movimiento.length - 2]

  } else {
    casilla = movimiento[movimiento.length - 2] + movimiento[movimiento.length - 1]
  }
  return casilla
}

function detectarTipoMovimiento(movimiento) {
  var tipoMovimiento = ""
  //si el movimiento contiene x es un movimiento de captura, si no, es desplazamiento normal
  for (let i = 0; i < movimiento.length; i++) {
    if (movimiento[i] == "x") {
      tipoMovimiento = "captura"
    }
    else {
      tipoMovimiento = "desplazamiento"
    }

  }
  return tipoMovimiento
}
function moverPieza(movimiento, pieza, casilla, tipoMovimiento) {
  var celdaNueva = ""
  var celdaAnterior = ""
  var columnaAnterior = ""
  var filaAnterior = ""
  var filaNueva = ""
  const columnas = ["a", "b", "c", "d", "e", "f", "g", "h"]
  const filas = ["8", "7", "6", "5", "4", "3", "2", "1"]
  //para un peon
  //peon blanco
  if (pieza == "peonB") {
    filaNueva = casilla[1]
    if (tipoMovimiento == "captura") {
      columnaAnterior = movimiento[0]

      celdaNueva = casilla
      celdaNueva.style = peonB
      //buscamos la celda donde estaba la pieza

      for (let i = 0; i < filas.length; i++) {
        if (filaNueva == filas[i]) {
          filaAnterior = filas[i + 1]
          celdaAnterior = columnaAnterior + filaAnterior
          break
        }
      }
      //borramos celdaAnterior
      celda = document.getElementById(celdaAnterior)
      celda.style = " "

    }
    else if (tipoMovimiento == "desplazamiento") {
      celdaNueva = document.getElementById(casilla)
      celdaNueva.style = peonB
      //borramos donde estaba el peon antes
      columnaAnterior = casilla[0]
      for (let i = 0; i < filas.length; i++) {
        if (filaNueva == filas[i]) {
          filaAnterior = filas[i + 1]
          celdaAnterior = columnaAnterior + filaAnterior
          //revisamos si hay un peon una casilla antes
          celda = document.getElementById(celdaAnterior)
          //si no esta vacio, significa que ahí estaba el peon
          if (celda.style == peonB) {
            celda.style = " "
          } else {
            //el peon no estaba una casilla antes, entonces está dos casillas antes
            for (let i = 0; i < filas.length; i++) {
              if (filaAnterior == filas[i]) {
                filaAnterior = filas[i + 1]
                break
              }

            }
            celdaAnterior = columnaAnterior + filaAnterior
            celda = document.getElementById(celdaAnterior)
            celda.style = " "
          }
          break
        }
      }
    }
  } else if (pieza == "peonN") {
    filaNueva = casilla[1]
    if (tipoMovimiento == "captura") {
      columnaAnterior = movimiento[0]

      celdaNueva = casilla
      celdaNueva.style = peonN
      //buscamos la celda donde estaba la pieza

      for (let i = 0; i < filas.length; i++) {
        if (filaNueva == filas[i]) {
          filaAnterior = filas[i - 1]
          celdaAnterior = columnaAnterior + filaAnterior
          break
        }
      }
      //borramos celdaAnterior
      celda = document.getElementById(celdaAnterior)
      celda.style = " "

    }
    else if (tipoMovimiento == "desplazamiento") {
      celdaNueva = document.getElementById(casilla)
      celdaNueva.style = peonN
      //borramos donde estaba el peon antes
      columnaAnterior = casilla[0]
      for (let i = 0; i < filas.length; i++) {
        if (filaNueva == filas[i]) {
          filaAnterior = filas[i - 1]
          celdaAnterior = columnaAnterior + filaAnterior
          //revisamos si hay un peon una casilla antes
          celda = document.getElementById(celdaAnterior)
          //si no esta vacio, significa que ahí estaba el peon
          if (celda.style == peonN) {
            celda.style = " "
          } else {
            //el peon no estaba una casilla antes, entonces está dos casillas antes
            for (let i = 0; i < filas.length; i++) {
              if (filaAnterior == filas[i]) {
                filaAnterior = filas[i - 1]
                break
              }

            }
            celdaAnterior = columnaAnterior + filaAnterior
            celda = document.getElementById(celdaAnterior)
            celda.style = " "
          }
          break
        }
      }
    }

  }else if(pieza == "caballoB"){
      celdaNueva = casilla
      celdaNueva.style = caballoB

      //buscamos la celda donde estaba la pieza
      

  }

}

function moverCaballo(params) {
  
}





