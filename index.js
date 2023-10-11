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
//! Primitives
var num1 = 5;
var num2 = 6;
var theString = "John Doe";
var theBool = true;
var anything = true;
anything;
("Hello World!");
console.log(anything);
var num3 = 7;
console.log(num3);
//!Function
function add(x, y) {
    return x + y;
}
console.log(add(5, 6));
var sub = function (x, y) {
    return x - y;
};
function display(message) {
    console.log("The Message ".concat(message));
}
display("is working!");
//! Array
var theArr = ["Adam", "Eve"];
var theObj = {
    id: 1,
    name: "John Doe",
    isActive: true,
};
console.log(theObj);
var Pokemon = /** @class */ (function () {
    function Pokemon(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
    return Pokemon;
}());
var pikachu = new Pokemon(1, "Pikachu", "Electric");
console.log(pikachu);
var Evolved = /** @class */ (function (_super) {
    __extends(Evolved, _super);
    function Evolved(id, name, type, pastForm) {
        var _this = _super.call(this, id, name, type) || this;
        _this.pastForm = pastForm;
        return _this;
    }
    Evolved.prototype.greeting = function () {
        return "Hello, my name is ".concat(this.name);
    };
    return Evolved;
}(Pokemon));
var raichu = new Evolved(1, "Raichu", "electric", "Pikachu");
console.log(raichu);
console.log(raichu.greeting());
