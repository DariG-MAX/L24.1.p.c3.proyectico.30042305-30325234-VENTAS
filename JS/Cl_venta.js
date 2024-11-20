/*Se desea llevar un control de las ventas que realiza una tienda. Se tiene por cada venta: 

nombre del cliente, 

número de factura, 

costo y 

cantidad de artículos. Se requiere de un programa que permita el registro de esta información, conociendo al principio de la ejecución el monto inicial en caja y el porcentaje de incremento para el costo de cada venta.

Estructuras de datos recomendadas
 Cl_tienda: montoCaja, porcIncremento
 Cl_venta: cliente, factura, costo, cnArticulos Primeros requerimientos
 Los datos entrada vienen en un archivo (con import... ver anexo)
 Monto final en caja
 Clientes que pagaron el monto mayor
 Clientes que sólo llevaron 1 artículo*/

export default class Cl_venta {
    constructor(cliente, factura, costo, cnArticulos) {
      this.cliente = cliente;
      this.factura = factura;
      this.costo = costo;
      this.cnArticulos = cnArticulos;
    }
    set cliente(c) {
      this._cliente = c;
    }
    get cliente() {
      return this._cliente;
    }
    set factura(f) {
      this._factura = +f;
    }
    get factura() {
      return this._factura;
    }
    set costo(cs) {
      this._costo = +cs;
    }
    get costo() {
      return this._costo;
    }
    set cnArticulos(cA) {
      this._cnArticulos = +cA;
    }
    get cnArticulos() {
      return this._cnArticulos;
    }
    toJSON() {
      return {
        cliente: this.cliente,
        factura: this.factura,
        costo: this.costo,
        cnArticulos: this.cnArticulos,
      };
    }
};