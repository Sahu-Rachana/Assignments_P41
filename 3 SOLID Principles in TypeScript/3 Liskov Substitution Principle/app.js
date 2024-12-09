/* Liskov Substitution Principle (LSP) */
/* Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. */
/* That is in a class hierarchy, derived classes should be able to substitute their base classes seamlessly. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* First a seller wanted to sell medicine so created a products class but, now
wants to introduce a new item. If the item is a food item it can extend this class but if its a book it can't as it does not have a expiry date.*/
var Product = /** @class */ (function () {
    function Product(id, name, expiry) {
        this.id = id;
        this.name = name;
        this.expiry = expiry;
    }
    Product.prototype.getID = function () {
        return this.id;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getExpiryDate = function () {
        return this.expiry;
    };
    return Product;
}());
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(id, name, expiry) {
        return _super.call(this, id, name, expiry) || this;
    }
    return Food;
}(Product));
var med1 = new Product('Med01', 'Medicine - 01', '12/12/2012');
var food1 = new Food('Food1', 'Food - 01', '20/12/2015');
console.log("MedID: ".concat(med1.getID(), ", MedName: ").concat(med1.getName(), ", MedExpiry: ").concat(med1.getExpiryDate()));
console.log("FoodID: ".concat(food1.getID(), ", FoodName: ").concat(food1.getName(), ", FoodExpiry: ").concat(food1.getExpiryDate()));
