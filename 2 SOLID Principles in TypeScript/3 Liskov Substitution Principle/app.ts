/* Liskov Substitution Principle (LSP) */
/* Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. */
/* That is in a class hierarchy, derived classes should be able to substitute their base classes seamlessly. */

/* First a seller wanted to sell medicine so created a products class but, now 
wants to introduce a new item. If the item is a food item it can extend this class but if its a book it can't as it does not have a expiry date.*/

class Product {
    protected id: string;
    protected name: string;
    protected expiry: string;

    constructor(id: string, name: string, expiry: string) {
        this.id = id;
        this.name = name;
        this.expiry = expiry;
    }

    public getID(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getExpiryDate(): string {
        return this.expiry;
    }
}

class Food extends Product{
    constructor(id: string, name: string, expiry: string)
    {
        super(id, name, expiry);
    }
}

let med1 = new Product('Med01', 'Medicine - 01', '12/12/2012');
let food1 = new Food('Food1', 'Food - 01', '20/12/2015');

console.log(`MedID: ${med1.getID()}, MedName: ${med1.getName()}, MedExpiry: ${med1.getExpiryDate()}`);
console.log(`FoodID: ${food1.getID()}, FoodName: ${food1.getName()}, FoodExpiry: ${food1.getExpiryDate()}`);
