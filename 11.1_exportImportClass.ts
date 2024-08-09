// shapes.ts
export class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

export class Square {
    private sideLength: number;

    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }

    public getArea(): number {
        return this.sideLength * this.sideLength;
    }
}
