// Base interface for a Vehicle
interface Vehicle {
    brand: string;
    year: number;
    start(): void;
    stop(): void;
}

// Interface that inherits from Vehicle and adds optional properties
interface ElectricVehicle extends Vehicle {
    batteryCapacity?: number;  // Optional property for electric vehicles
    charge(): void;           // Method to charge the electric vehicle
}

// Implementation of a Car that implements the ElectricVehicle interface
class Car implements ElectricVehicle {
    brand: string;
    year: number;
    batteryCapacity?: number;

    constructor(brand: string, year: number, batteryCapacity?: number) {
        this.brand = brand;
        this.year = year;
        this.batteryCapacity = batteryCapacity;
    }

    start() {
        console.log(`${this.brand} is starting...`);
    }

    stop() {
        console.log(`${this.brand} is stopping.`);
    }

    charge() {
        if (this.batteryCapacity) {
            console.log(`${this.brand} is charging. Battery Capacity: ${this.batteryCapacity} kWh`);
        } else {
            console.log(`${this.brand} is not electric, cannot charge.`);
        }
    }
}

// Example usage
const electricCar = new Car("Tesla", 2022, 75);
electricCar.start();
electricCar.charge();
electricCar.stop();

const regularCar = new Car("Toyota", 2023);
regularCar.start();
regularCar.stop();
regularCar.charge();
