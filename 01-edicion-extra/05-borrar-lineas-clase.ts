//*
//*    Objetivo:
//*        Eliminar líneas de código innecesarias
//*    
//*    Tips:
//*        Borrar línea: Ctrl + Shift + K
//*        Deshacer: Ctrl + Z
//*
//*    Tarea:
//*        1. Eliminar todos los console.log (líneas de debugging)
//*        2. Eliminar los comentarios TODO
//*        3. Eliminar el método deprecado 'oldCalculate'
//*

class CalculadoraPrecios {
    private precioBase: number;

    constructor(precioBase: number) {
        console.log('Creando calculadora con precio:', precioBase); // Eliminar
        this.precioBase = precioBase;
    }

    // TODO: Refactorizar este método
    calcularDescuento(porcentaje: number): number {
        console.log('Calculando descuento:', porcentaje); // Eliminar
        const descuento = this.precioBase * (porcentaje / 100);
        console.log('Descuento calculado:', descuento); // Eliminar
        return descuento;
    }

    // TODO: Validar que el porcentaje sea válido
    calcularPrecioFinal(descuentoPorcentaje: number): number {
        const descuento = this.calcularDescuento(descuentoPorcentaje);
        console.log('Aplicando descuento al precio base'); // Eliminar
        return this.precioBase - descuento;
    }

    // @deprecated Usar calcularPrecioFinal en su lugar
    oldCalculate(discount: number): number {
        return this.precioBase - discount;
    }

    obtenerPrecioBase(): number {
        console.log('Obteniendo precio base'); // Eliminar
        return this.precioBase;
    }

    // TODO: Agregar impuestos al cálculo
}


//! Objetivo final - Código limpio

class CalculadoraPreciosFinal {
    private precioBase: number;

    constructor(precioBase: number) {
        this.precioBase = precioBase;
    }

    calcularDescuento(porcentaje: number): number {
        const descuento = this.precioBase * (porcentaje / 100);
        return descuento;
    }

    calcularPrecioFinal(descuentoPorcentaje: number): number {
        const descuento = this.calcularDescuento(descuentoPorcentaje);
        return this.precioBase - descuento;
    }

    obtenerPrecioBase(): number {
        return this.precioBase;
    }
}
