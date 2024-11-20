2. /* VENTAS
Se desea llevar un control de las ventas que realiza una tienda. Se tiene por cada venta: nombre del cliente, número de factura, costo y cantidad de artículos. Se requiere de un programa que permita el registro de esta información, conociendo al principio de la ejecución el monto inicial en caja y el porcentaje de incremento para el costo de cada venta.
Estructuras de datos recomendadas
 Cl_tienda: montoCaja, porcIncremento
 Cl_venta: cliente, factura, costo, cnArticulos Primeros requerimientos
 Los datos entrada vienen en un archivo (con import... ver anexo)
 Monto final en caja
 Clientes que pagaron el monto mayor
 Clientes que sólo llevaron 1 artículo 
export default Dt_tienda = {
  montoCaja: 200,
  porcIncremento: 25.00
}
export default Dt_ventas = [
  {
    cliente: 'Luis',
    factura: 1111,
    costo: 100,
    cnArticulos: 3
}, {
}, {
},
:::::::::: ]
cliente: 'Carla',
factura: 2222,
costo: 50,
cnArticulos: 4
cliente: Mery',
factura: 3333,
costo: 200,
cnArticulos: 10
*/
import Dt_tienda from "./Dt_tienda.js";
import Dt_ventas from "./Dt_ventas.js";
import Cl_tienda from "./Cl_tienda.js";

let tienda = new Cl_tienda(Dt_tienda.montoCaja, Dt_tienda.porcIncremento);

let ventas = Dt_ventas;

ventas.forEach((v) =>
  tienda.agregarVenta(v.cliente, v.factura, v.costo, v.cnArticulos)
);

let montoFinal = () => {
  let acum = 0;
  tienda.ventas.forEach((v) => {
    acum += v.costo;
  });
  return acum + tienda.montoCaja;
};

let montoMayor = () => {
  let mayor = 0;
  tienda.ventas.forEach((v) => {
    if (v.costo > mayor) mayor = v.costo;
  });
  return mayor;
};

let clientesMontoMayor = () => {
  let clientes = [];
  tienda.ventas.forEach((v) => {
    if (v.costo == montoMayor()) clientes.push(v.cliente);
  });
  return clientes;
};

let clientes1Articulo = () => {
  let clientes = [];
  tienda.ventas.forEach((v) => {
    if (v.cnArticulos == 1) clientes.push(v.cliente);
  });
  return clientes;
};

let salida = document.getElementById("salida");

salida.innerHTML = "Resultados";
salida.innerHTML += "<br> Datos de los clientes: " + JSON.stringify(ventas);
salida.innerHTML += "<br> Monto final en caja: " + JSON.stringify(montoFinal());
salida.innerHTML +=
  "<br> Clientes que pagaron el monto mayor: " +
  JSON.stringify(clientesMontoMayor());
salida.innerHTML +=
  "<br> Clientes que pidieron 1 artículo: " +
  JSON.stringify(clientes1Articulo());
