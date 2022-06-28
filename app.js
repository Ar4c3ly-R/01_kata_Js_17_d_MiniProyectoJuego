let marcadorhumano = 0; 
let marcadorPc = 0;
let opcionJugador
let opcionComputadora = document.getElementById('opcion-cpu');
let jugador1_p1 = document.getElementById('jugador1');
let jugador2_p2 = document.getElementById('jugador2');
let imagenes = ["./imagenes/piedra.jpeg", "./imagenes/papel.jpeg", "./imagenes/tijeras.jpeg"];

//Convierte la opcion en número
function seleccionar(opcion){
    if(opcion === 'piedra'){
        opcionJugador = 0;
        movComp(opcionJugador);
    }else if(opcion === 'papel'){
        opcionJugador = 1;
        movComp(opcionJugador)
    } else if(opcion === 'tijeras'){
        opcionJugador = 2;
        movComp(opcionJugador)
    }
}

//Selecciona de manera aleatoria una opcion
function movComp (opcion){
    let opciones = ['piedra', 'papel', 'tijeras'];
    let randomComputadora = Math.floor (Math.random() *3 );
    let movida = opciones[randomComputadora];
    //definir que imagen corresponde de acuerdo al resultado random
    agregarImagen(randomComputadora);
    main(opcion, randomComputadora);
}

function agregarImagen(opcion_Computadora){
    let imagen = document.getElementById('opcion-cpu')
    if(opcion_Computadora == 0){
        imagen.src = imagenes[0];
        //cionComputadora.appendChild(imagen);
    }else if (opcion_Computadora == 1){
        imagen.src = imagenes[1];
    }else if(opcion_Computadora == 2){
    imagen.src = imagenes[2];
    }
}

//Comparación de resultados y condicionales.
function main (opcion_Jugador, opcion_Computadora){
    console.log(opcion_Jugador);
    console.log(opcion_Computadora)
    if(opcion_Jugador == 0){
        if(opcion_Computadora == 0){
        empate()
        } else if (opcion_Computadora == 1){
            perder()
        }else if(opcion_Computadora== 2){
            ganar()
        }
    } else if (opcion_Jugador == 1){
        if(opcion_Computadora == 1){
            empate()
            } else if (opcion_Computadora == 2){
                perder()
            }else if(opcion_Computadora== 0){
                ganar()
            }
    } else if(opcion_Jugador == 2){
        if(opcion_Computadora == 2){
            empate()
            } else if (opcion_Computadora == 0){
                perder()
            }else if(opcion_Computadora== 1){
                ganar()
            }
    }
    
}

//Tablero, aumento de puntos y mensajes
function ganar(){
    marcadorhumano++;
    jugador1_p1.innerHTML = marcadorhumano
    document.getElementById('ganador').innerText=('XD ¡GANASTE!')
}
function perder(){
    marcadorPc++;
    jugador2_p2.innerHTML = marcadorPc
    document.getElementById('ganador').innerText=(':( ¡PERDISTE!')
}
function empate(){
    document.getElementById('ganador').innerText=(':o ¡EMPATE!')
}
