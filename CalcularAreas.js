//Crear funcion para llamar
//funciones y calcular areas.


let calcSurface = (figure) => {

    const surfaces = require('./surfaces.js');


    Process.stdin.resume();
    process.stdin.setEncoding('utf8');

    //Validar la figura a calcular.

    switch (figure) {
        case 'square':

            process.stdout.write('Por favor ingrese el lado de un cuadrado');
            process.stdin.on('data', (chunk) => {
                let side = parseFloat(chunk);
                let surface = surfaces.square(side);
                process.stdout.write('La superficie de el cuadrado es ' + surface + ' metros cuadrados\n ');
                process.stdin.destroy();

            })
            break;

        case 'triangle':

            process.stdout.write("Por favor ingrese la base y la altura de un triangulo, separado por un espacio : ");
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.triangle(base, height);
                process.stdout.write('La superficie de el triangulo es : ' + surface + ' metros cuadrados\n');
                process.stdin.destroy();

            });
            break;

        case 'rectangle':

            process.stdout.write('Por favor ingrese la base y la altura de un rectangulo , separado por un espacio : ');
            process.stdin.on('data', (chunk) => {
                var baseAndHeight = chunk.split(' ');
                var base = parseFloat(baseAndHeight[0]);
                var height = parseFloat(baseAndHeight[1]);
                var surface = surfaces.rectangle(base, height);
                process.stdout.write('La superficie de el rectangulo es : ' + surface + ' metros cuadrados\n');
                process.stdin.destroy();


            });
            break;

        case 'circle':
            process.stdout.write('Porfavor ingrese el radio del circulo : ');
            process.stdin.on('data', function(chunk) {
                var surface = surfaces.circle(parseFloat(chunk));
                process.stdout.write('La superficie de l circulo es : ' + surface + ' metros cuadrados\n');
                process.stdin.destroy();
            });
            break;

        default:
            process.stdout.write('Perdido la opcion. Porfavor intente denuevo.\n');
            process.exit();
            break;
    }

}

calcSurface(process.argv[2]);
process.on('exit', () => {
    process.stdout.write('Hasta la proxima');

});