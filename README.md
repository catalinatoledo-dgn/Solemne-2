**Solemne-2 - Catalina Toledo**
# SWISSTED - THE POLICE
**Autor de la obra:**
**Mike Joyce**

## 1. Información del Proyecto
Destacado diseñador gráfico estadounidense y director del estudio *Stereotype Design* en Nueva York.

El proyecto **"Swissted"** de Mike Joyce. Específicamente, el afiche rediseñado para el concierto de *THE POLICE* 20/10/1978 in the CBGB club - Nueva York.
Swissted es un proyecto en donde se toman flyers y pósters originales de la escena punk, hardcore y new wave, y se mezclan rediseñándose bajo las estrictas reglas del **Diseño Suizo**. La obra de referencia se caracteriza por una grilla modular ortogonal, la cual usa tipografía sans-serif, y una composición geométrica de círculos superpuestos en alta saturación cromática que interactúan entre sí.

La elección de este referente me fue sumamente interesante, ya que el diseño de Mike Joyce ya viene gobernado por una lógica matemática basada en retículas, proporciones estrictas y un orden geométrico.
En este proyecto, la grilla fija y los círculos limpios se traducen a un código dinámico a través de un bucle anidado. La aproximación computacional consiste en quitar la estructura estática del póster mediante algoritmos, para que los círculos de colores simulen una vibración óptica, y se aplicaron condicionales de distancia para que el círculo negro central reaccione dinámicamente escalando su tamaño según la cercanía del mouse. Así, transformamos una pieza gráfica impresa fija en un cartel digital vivo y dinámico.

Imagen referencial:

![imagen](https://www.swissted.com/cdn/shop/products/police.gif?v=1384722742)


## 2. Descripción objetiva
Este proyecto es un sistema visual dinámico, interactivo y generativo programado en p5.js que reinterpreta de forma digital y cinética un afiche de la serie *Swissted* de Mike Joyce de la banda *The Police* . El sistema rompe la estructura estática del diseño impreso original mediante el uso de algoritmos matemáticos continuos.
En la pantalla se despliega una grilla ortogonal estructurada de 11 filas por 11 columnas, que organiza el espacio visual. En cada celda de la retícula se observa un patrón geométrico de círculos superpuestos de colores  transparentados, concluyendo en el centro por un círculo negro que actúa como el enfoque de interacción principal.

### Elementos visuales 
- Figuras geométricas (círculos superpuestos)
- Paleta cromática de alto contraste inspirada en las tintas de impresión (Cian, Magenta, Amarillo)
- Fondo plano que unifica la composición
- Estructura de grilla modular invisible pero matemáticamente estricta
  
### Inputs
- MouseX (modifica el tamaño de los círculos)
- MouseY (controla la intensidad del movimiento)
- Función sin () + pulso (generan las variaciones de ondas en el tamaño de los círculos, generando movimiento)
- Funcion CalcularOnda (Función propia que calcula el movimiento de los círculos)

### Outputs
Se genera un lienzo visual dinámico que renderiza a un frame constante en un patrón cinético en pantalla, actualizando de forma continua el tamaño de los círculos por desfase de onda y duplicando la escala del círculo negro central de cada celda según la proximidad del mouse.

## PROYECTO FINAL


## link p5.js




## 3. Descripcion conceptual
La idea central del proyecto busca traducir la estructura geométrica estática, rígida del Diseño Suizo y la vibración cultural del Post-Punk a un entorno digital interactivo. 
Utilizando una grilla matemática como base, el sistema rompe la estática de una pieza gráfica impresa tradicional, transformándola en un cartel vivo que reacciona físicamente al paso del tiempo y a la presencia del espectador.

### Principios de diseño
- Estructura y orden reticular
- Ritmo y repetición
- Contraste de color y forma
- Movimiento
- Foco y jerarquía interactiva

## 4. Proceso de desarollo
### Estructuración y Grilla 
Se inicializaron las variables de control del lienzo (tamañoMax, transparencia, columnas = 11, filas = 11) y el incrementador temporal (pulso). Luego se declaró el tamaño del lienzo con createCanvas(600, 600) y se estructuró el doble bucle anidado *for* para recorrer las posiciones de la grilla

### Pruebas de Desfase y Capas Iniciales
Se comenzaron a dibujar las primeras elipses aplicando desplazamientos algebraicos fijos en sus coordenadas espaciales (x + 10, y + 10, x - 4, y - 4), fue un proceso de prueba y error. Luego se introdujo la función sin() multiplicada por un factor de movimiento para modular de forma periódica la variable de tamaño, operando de forma localizada en la esquina superior izquierda del lienzo.

### Bucle
Se ajustó la correlación entre las variables de iteración i y j con la variable *espaciado* para proyectar el patrón en la totalidad del canvas de 600 x 600. El fondo se saturó visualmente debido a que los círculos negros centrales compartían el mismo cálculo de oscilación que las elipses de fondo.

### Colores y Círculo central negro
Se aplicaron de manera estricta los colores del referente de Mike Joyce (*Swissted*), aislando las transparencias en los canales de color periféricos *let*. Luego se redefinieron los desplazamientos simétricos para cada capa de elipse y se fijó el tamaño del círculo negro central a una escala estática proporcional (tamañoNegro = tamañoMax * 0.5) para recuperar el contraste de la retícula original.

### Prueba y Error
Se ajustaron los signos algebraicos de las elipses secundarias (x - 10, y + 10), permitiendo que las capas de color "se superpusieran" de forma armónica en torno al centro de cada módulo modular.

### Programación del Mouse
Se implementó la condicional basada en la función de distancia dist(). Al aproximar el mouse a una celda, el sistema detecta que la distancia es menor a 40 y altera dinámicamente la escala del círculo negro del centro, expandiéndolo significativamente en tiempo real como respuesta.

###  Optimización y Mapeo Final
Se limpió y refinó el código agregando funciones globales como *noStroke()* en el *setup()* para eliminar los bordes vectoriales. Luego se reemplazaron los factores de movimiento estipulados por la función *map()* vinculada directamente a los ejes del cursor del mouse. El eje MouseX controla de manera lineal el rango de escala de tamaño de las oscilaciones, y el eje del MouseY mapea de manera continua la intensidad global del movimiento, permitiendo controlar la velocidad del lienzo.


## 6. Diagrama de Flujo

A continuación se presenta el diagrama de flujo digital que explica detalladamente la lógica computacional del sistema, mapeando sus inputs, procesos repetitivos, condicionales de control y outputs visuales:

![Diagrama de Flujo](./diagrama-de-flujo.png)
