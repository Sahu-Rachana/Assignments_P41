/* One Class One Responsibility */
/* Instead of having one ShoppingCart class we can have separate classes for each responsibility as follows. */
var AddItem = /** @class */ (function () {
    function AddItem(item) {
        this.item = item;
    }
    AddItem.prototype.itemAdded = function () {
        console.log("Item ".concat(this.item, " added to cart"));
    };
    return AddItem;
}());
var RemoveItem = /** @class */ (function () {
    function RemoveItem(item) {
        this.item = item;
    }
    RemoveItem.prototype.itemRemoved = function () {
        console.log("Item ".concat(this.item, " removed from cart"));
    };
    return RemoveItem;
}());
var cart1 = new AddItem('Ice-cream');
var cart2 = new RemoveItem('Cake');
cart1.itemAdded();
cart2.itemRemoved();
