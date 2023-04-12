


function gastos() {

    let operacion = parseInt(prompt("Seleccione operación:  1-Venta  ó  2-Alquiler"));
    switch (operacion) {
        case 1:
            let precio1 = parseInt(prompt("Ingrese el precio publicado para esta propiedad: U$S"));
            let honorarios1 = precio1 * 0.03;
            let total1 = precio1 + honorarios1;
            alert("Detalle de Gastos: \nValor del Inmueble           U$S " + precio1 + "\nHonorarios                   U$S " + honorarios1 + "\n\nTotal                        U$S " + total1);
            break;
            
        case 2:
            let destino = parseInt(prompt("Seleccione destino:  1-Vivienda  ó  2-Comercial"));
            switch (destino) {
                case 1:
                    let precio21 = parseInt(prompt("Ingrese el precio publicado para esta propiedad: $"));
                    let honorarios21 = precio21 * 36 * 0.05;
                    let informes21 = 6000;
                    let sellado21 = 0;
                    let total21 = precio21 + honorarios21 + informes21 + sellado21;
                    alert("Detalle de Gastos: \nAlquiler                     $ " + precio21 + "\nHonorarios                   $ " + honorarios21 + "\nInformes                     $ " + informes21 + "\nSellado                      $ " + sellado21 + "\n\nTotal                        $ " + total21);
                    break;

                case 2:
                    let precio22 = parseInt(prompt("Ingrese el precio publicado para esta propiedad: $"));
                    let honorarios22 = precio22 * 36 * 0.05;
                    let informes22 = 6000;
                    let sellado22 = 0;

                    if (precio22 >= 150000) {
                      sellado22 = precio22 * 36 * 0.01;
                    };

                    let total22 = precio22 + honorarios22 + informes22 + sellado22;
                    alert("Detalle de gastos: \nAlquiler                     $ " + precio22 + "\nHonorarios                   $ " + honorarios22 + "\nInformes                     $ " + informes22 + "\nSellado                      $ " + sellado22 + "\n\nTotal                        $ " + total22);
                    break;

                default:
                    alert("Salir");
            };

        default:
            alert("Salir");
    };
};

gastos();
