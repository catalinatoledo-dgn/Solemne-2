// Solemne 2
// Catalina Toledo
// Bauhaus - Police

// Variables Propias
let espaciado = 55; // Espacio entre círculos
let tamañoMax = 60; // Tamaño de círculos
let transparencia = 120; // Transparencia círculos
let pulso = 0; // Pulso que genera movimiento
let columnas = 11;
let filas = 11; 

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(218, 222, 211); // Color fondo 
  
  pulso += 0.3; // Aumenta generativamente el valor de movimiento en 0.3 ej 0 + 0.3 = 0.6 + 0.3 = 0.9
  
  // Bucles anidados que recorren la grilla
  for (let i = 0; i < columnas; i++) { 
  for (let j = 0; j < filas; j++) { 
    
    let tamaño = tamañoMax
    
    // separación entre los círculos en la grilla 
    let x = i * espaciado;
    let y = j * espaciado;
    
    // Tamaño que cambia según la posición del mouse
    let tamano = map(i + j, 0, columnas + filas, 10, tamañoMax); 
    
    // Input dinámico, mouse en x modifica el tamaño de los círculos
    tamaño += map(mouseX, 0, width, -35, 20);
    
    // Input de mouse Y, controla la intensidad del movimiento, arriba estando en 0 (quieto) y abajo moviendose en una intensidad de 10
    let movimiento = map(mouseY, 0, height, 1, 10);

    // Función sin () + pulso generan las variaciones de ondas en el tamaño de los círculos, generando movimiento
    tamaño += sin(pulso + i * 0.5 + j * 0.5) * movimiento;
    
    // Tamaño del círculo negro, siendo la mitad del tamaño de los círculos de colores 60 * 0.5 = 30
    let tamañoNegro = tamañoMax * 0.5;
    
    // Distancia entre el mouse y cada círculo para que se produzca la interacción
    let distancia = dist(mouseX, mouseY, x, y);
    
    // Si la distancia del mouse y el círculo negro es menor a 40, este aumentara de tamaño al doble
    if (distancia < 40) {
      tamañoNegro *= 2;
    }
    
    // En ellipse se aplican desplazamientos en las coordenadas de cada círculo para que se superpongan
    // Círculo amarillo
    fill (207, 177, 56, transparencia);
    ellipse (x + 10, y + 10, tamaño);
    
    // Círculo rojo
    fill (175, 35, 78, transparencia); 
    ellipse (x - 10, y + 10, tamaño);
    
    // Círculo verde
    fill (51, 128, 118, transparencia);
    ellipse (x, y - 6, tamaño);
    
    // Círulo negro
    fill (0);
    ellipse (x, y, tamañoNegro);

      }
    }
  }

// Esta función propia permite que el sistema de ´sin()´ sea modularizado, ayudando a que procese el movimiento de los círculos de una manera más eficiente y fluida.
// Función propia que calcula el movimiento de los círculos
function calcularOnda (tiempo, columna, fila, intensidad) {
  let resultado = sin(tiempo + columna * 0.5 + fila * 0.5) * intensidad
  
  // Si el resultado de la onda es menor a -15, este es ignorado e igualado a -15
  if (resultado < -15) {
    return -15;
  } else {
    return resultado;
  }

}
