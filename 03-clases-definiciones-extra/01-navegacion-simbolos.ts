//*
//*    Objetivo:
//*        Navegar rápidamente por los símbolos de la clase
//*        Practicar el explorador de símbolos
//*
//*    Tips:
//*        ⌘ P => luego escribir @
//*        ⇧ ⌘ O
//*
//*        Ctrl + P => luego escribir @
//*        Ctrl + Shift + O
//*
//*        Agrupar símbolos: después de la @, escribir :
//*
//*    Tareas:
//*        1. Usar Ctrl + Shift + O para abrir el explorador de símbolos
//*        2. Navegar a la propiedad 'engineType'
//*        3. Navegar al método 'accelerate()'
//*        4. Agrupar símbolos por tipo con @:
//*        5. Practicar navegación rápida entre métodos
//*


class Vehicle {

    brand: string = '';
    model: string = '';
    year: number = 0;
    color: string = '';
    engineType: string = '';
    mileage: number = 0;
    fuelLevel: number = 100;
    
    private _licensePlate: string = '';
    private _vin: string = '';

    constructor() { }

    start() {
        console.log('Motor encendido');
    }

    stop() {
        console.log('Motor apagado');
    }

    accelerate(speed: number) {
        console.log(`Acelerando a ${speed} km/h`);
    }

    brake() {
        console.log('Frenando');
    }

    turnLeft() {
        console.log('Girando a la izquierda');
    }

    turnRight() {
        console.log('Girando a la derecha');
    }

    refuel(amount: number) {
        this.fuelLevel += amount;
    }

    checkMaintenance() {
        return this.mileage > 10000;
    }

    // Propiedades adicionales para demostración del explorador

    doors: number = 4;
    
    passengers: number = 5;
    
    transmission: string = 'automatic';
    
    airbags: number = 6;

    set licensePlate(value: string) {
        this._licensePlate = value.toUpperCase();
    }

    get licensePlate() {
        return this._licensePlate;
    }

    set vin(value: string) {
        this._vin = value;
    }

    get vin() {
        return this._vin;
    }

    honk() {
        console.log('¡Beep beep!');
    }

    openTrunk() {
        console.log('Baúl abierto');
    }

    closeTrunk() {
        console.log('Baúl cerrado');
    }
}
