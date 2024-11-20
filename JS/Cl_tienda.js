import Cl_venta from "./Cl_venta.js";  

export default class Cl_tienda {  
    constructor(montoCaja, porcIncremento) {  
        this.montoCaja = montoCaja;  
        this.porcIncremento = porcIncremento;  
        this.ventas = [];  
    }  

    set montoCaja(mc) {  
        this._montoCaja = +mc; // Asegúrate de que sea un número  
    }  

    get montoCaja() {  
        return this._montoCaja;  
    }  

    set porcIncremento(pi) {  
        this._porcIncremento = +pi; // Asegúrate de que sea un número  
    }  

    get porcIncremento() {  
        return this._porcIncremento;  
    }  

    agregarVenta(cliente, factura, costo, cnArticulos) {  
        let v = new Cl_venta(cliente, factura, costo, cnArticulos);  
        this.ventas.push(v);  
        
        // Incrementar el costo de la venta según el porcentaje  
        const costoFinal = costo + (costo * this.porcIncremento / 100);  
        
        // Aumentar el monto de caja  
        this.montoCaja += costoFinal;  
    }  
}