let results = new Array(); // es lo mismo que let results = [];

// logica de presenatcion
function sumarNumeros() {
    const n1 = parseFloat(document.getElementById("numero1").value);
    const n2 = parseFloat(document.getElementById("numero2").value);
    const result = sumar(n1, n2);
    document.getElementById("resultado").textContent = result;
    results.push({"result": result, "firstNumber": n1, "secondNumber": n2})
}

const viewResults = ()=> {
    const table = document.getElementById("results")
    
 
    for (let i = 0; i < results.length; i++ ) {
        console.log(results[i]);

        var nuevaFila = document.createElement('tr');
        var celda1 = document.createElement('td');
        var celda2 = document.createElement('td');
        var celda3 = document.createElement('td');

        celda1.textContent = results[i].result;
        celda2.textContent = results[i].firstNumber;
        celda3.textContent = results[i].secondNumber;

        nuevaFila.appendChild(celda1);
        nuevaFila.appendChild(celda2);
        nuevaFila.appendChild(celda3);

        //  agrega nueva fila en table
        table.appendChild(nuevaFila);
 
 }
}

//logica de calculo
const sumar = (n1, n2) => {
    const result = n1 + n2;
    return result;
}

function saludar() {
    alert("HOLA");
}

const hola = ()=> {
    alert("HOLA!!!");
}
