const sumar = (...numbers) => {
    let sum = 0;
    for (n of numbers) {
        sum += n;
    }
    return sum;
}
document.write(`<p> la suma es: ${sumar(1, 2, 3)}</p>`);