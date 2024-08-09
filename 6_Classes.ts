
/*
Topic covered:
Instance method
Static method
Access modifiers : default value is public
consructor
*/



// Define the SuperHero class
class SuperHero {
    // Public properties (fields)
    public name: string;
    public superPower: string;

    // Private static property
    private static totalNumberOfPeopleSaved = 0;

    // Constructor with public access modifiers
    constructor(name: string, superPower: string) {
        this.name = name;
        this.superPower = superPower;
    }

    // Getter method for totalNumberOfPeopleSaved
    public static get TotalPeopleSaved(): number {
        return SuperHero.totalNumberOfPeopleSaved;
    }

    // Public method to save a person
    public saveMe(victim: string): string {
        // Accessing and updating private static property
        SuperHero.totalNumberOfPeopleSaved += 1;
        return `${this.name} just saved ${victim} using ${this.superPower}!`;
    }

    // Getter method for retrieving the superhero's current status
    public get heroStatus(): string {
        return `${this.name} with ${this.superPower} has saved ${SuperHero.totalNumberOfPeopleSaved} people.`;
    }

    // Setter method to change the superhero's name
    public set changeHeroName(newName: string) {
        this.name = newName;
    }
}

// Create an instance of SuperHero
let bm = new SuperHero('Bruce Wayne', 'intellect');
let IM = new SuperHero('Tony Stark', 'Iron Man suit');

// Call the saveMe method and log the result
console.log(bm.saveMe('Harvey Dent'));
console.log(IM.saveMe('Harvey Dent'));

// Call the getter method to retrieve heroStatus
console.log(bm.heroStatus);

// Use the setter method to change the superhero's name
bm.changeHeroName = 'The Dark Knight';

// Call the getter method again to see the updated heroStatus
console.log(bm.heroStatus);

// Access the static property using the getter
console.log(`Total people saved by all superheroes: ${SuperHero.TotalPeopleSaved}`);
