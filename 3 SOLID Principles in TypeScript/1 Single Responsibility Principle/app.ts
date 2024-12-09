/* One Class One Responsibility */
/* Instead of having one ShoppingCart class we can have separate classes for each responsibility as follows. */

class AddItem {
    private item: string;
    constructor(item: string ) {
        this.item = item;
    }
    itemAdded(): void {
        console.log(`Item ${this.item} added to cart.`);
    }
}

class RemoveItem {
    private item: string;
    constructor(item: string ) {
        this.item = item;
    }
    itemRemoved(): void {
        console.log(`Item ${this.item} removed from cart.`);
    }
}

let cart1 = new AddItem('Ice-cream');
let cart2 = new RemoveItem('Cake');

cart1.itemAdded();
cart2.itemRemoved();