/*
    Parte de la buenas practicas de desarrollo y programacion con 
    JavaScript es la correcta declaracion de las variables y el 
    correcto seleccionado de los elementos en HTML.

    Podemos usar .getElementByClassName (Para llamar a una clase del HTML)
    o getElementById (Para llamar un id del HTML)

    El querySelector, es una forma de meter un arreglos sobre los elementos
    requeridos del HTML. Comparte un comportamiento similar como se selecciona
    en CSS los elementos.

    # ID
    .Class
    h1 
*/

const __element_1 = document.getElementsByClassName('item1')

const __element_2 = document.querySelector('.item2')

const __element_3 = document.querySelector('#item3')

const __element_4 = document.querySelector('input')

/* 
    Usar los elementos de html dentro de objetos permite obtener todas las
    propiedades de HTML en JavaScript y viceversa, esto permite una manipulacion
    completa de nuestros elementos en JavaScript
*/
console.log({__element_1,__element_2,__element_3, __element_4})

/* 
    Utilzar los elementos como llamados individuales sin la propiedad de objeto
    solo otorga la manipulacion "Basica" de nuestros elementos del HTML como 
    el ejemplo de esta impresion en consola
*/
console.log(__element_2);

/* 
    Usar los elementos de html dentro de objetos permite obtener todas las
    propiedades de HTML en JavaScript y viceversa, esto permite una manipulacion
    completa de nuestros elementos en JavaScript
*/
console.log(__element_1);



console.log(__element_4.value);

/* 
    Esta es la sintaxis para seleccionar mas de un elemntos dentro de una variable
    en JavaScript y obtener todas sus propiedades como si de un objeto se tratara.
*/

const a = document.getElementsByClassName;
const b = document.querySelectorAll;

/*********************************************************************************/

    //  CLASE NUMERO 2

    //  Como escribir codigo HTML con JavaScript

/*********************************************************************************/

__element_2.innerHTML = 'Este es un <br> codigo HTML';      //Permite escribir codigo HTML

__element_3.innerText = 'Este es un Texto Plano';           //Permite escribir texto plano

__element_2.getAttribute('class');                          //Obtiene los attributos de un elemento, ejemplo class, pero puede ser mas.

__element_2.setAttribute('class', 'rojo');                  //Modifica el atributo de un elemento


__element_2.classList.add('class')                          //Añade una nueva clase a los elementos,y atributos
__element_2.classList.remove('class')                       //Remueve o borra las clases de un elemento

/* 
__element_2.classList.contains();                           //Devuelve un valor verdaderos si la clase se encuentra en el atributo
__element_2.classList.toggle();                             //Borra si tiene la clase o agrega si no tiene la clase
 */

__element_4.value = "452123";
__element_4.placeholder = "Escribe la contraseña";

/* 
const img = document.createElement('img')                   //Sirve para crear elementos html dentro del index.html
img.setAttribute('src' , 'url')
__element_2.append(document.createElement('img'))           //Ejemplo del codigo anterior
__element_2.appendChild(document.createElement('img'))

 */


/*********************************************************************************/

    //  CLASE NUMERO 3

    //  Eventos en JavaScript con HTML onclick y onchange

/*********************************************************************************/

// Para documentos HTML el atributto - onclick="funcion" se trabaja con los botones
// Para documentos HTML el atributo - onchange="funcion" se trabaja con los input

const input1 = document.querySelector('.ipt');
const input2 = document.querySelector('.ipt2');

function btnClick(){
    console.log('Escuchando eventos de botones');
    console.log((Number(input1.value) + Number(input2.value)));
    document.querySelector('.ipt3').innerHTML = `${Number(input1.value) + Number(input2.value)}`
}


/*********************************************************************************/

    //  CLASE NUMERO 4

    //  Eventos en JavaScript con addEventListener

/*********************************************************************************/

// Para utilizar la funcion addEventListener es necesario poner de parametros el
// Evento esperado y la funcion a ejecutar cuando el evento sea lanzado.
const button = document.querySelector('.btn');
const nombre = document.querySelector('.nombre')

button.addEventListener('click', saludo);

function saludo(params) {
    params.
    document.querySelector('.ipt3').innerHTML = `Hola ${nombre.value}`
}

// Para poder trabajar con formularios HTML que por defecto cualquier boton dentro
// de ellos es de tipo submit, es necesario usasr otra forma de esperar el evento.
// ya no esperamos el evento de 'click sino ahora de 'submit

const form = document.querySelector('.form');
form.addEventListener('submit', mostrar);

function mostrar(evento) {
    evento.preventDefault();
    document.querySelector('.form-item1').innerHTML = `Hola`
}

/* 
// Eventos de teclado
    document.addEventListener("keypress", getEvtType, false); //[second]

    document.addEventListener("keydown", getEvtType, false); //first
    document.addEventListener("keyup", getEvtType, false); //third

// Eventos de ratón
    document.addEventListener("click", getEvtType, false); // third

    document.addEventListener("mousedown", getEvtType, false); //first
    document.addEventListener("mouseup", getEvtType, false); //second 
*/