// Este sea nuestro archivo que 
//contiene las funciones para
//calcular el area de las figuras
//geometricas

//Para el cuadrado
const square = (s) => {

    return s * s;
}

const rectangle = (b, h) => {
    return b * h;
}
const triangle = (b, h) => {
    return b * h;
}

const circle = (r) => {
    return Math.Pi * r * r;
};

const ellipse = (a, b) => {
    return Math.Pi * a * b;

};

module.exports = {
    square,
    rectangle,
    triangle,
    circle,
    ellipse

}