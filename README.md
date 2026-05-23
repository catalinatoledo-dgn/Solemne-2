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
