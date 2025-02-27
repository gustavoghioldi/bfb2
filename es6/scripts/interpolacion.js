const nombre = 'Juan';
const titulo ='Desarrollador Web';
document.write(`
    <h1>${titulo}</h1>
    <p>La interpolación de cadenas es una forma de concatenar cadenas de texto y variables de una forma más sencilla y legible.</p>
    <p>Por ejemplo, si tenemos una variable <code>nombre</code> con el valor <code>'Juan'</code>, podemos concatenarla con una cadena de texto de la siguiente forma:</p>
    <strong>${nombre}</strong>
    `);
document.write('${titulo}'); // No se interpola la variable titulo