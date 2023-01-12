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
var Animais = /** @class */ (function () {
    function Animais() {
    }
    Animais.prototype.latir = function () {
        console.log("AUAUAUAUAU");
    };
    Animais.prototype.correr = function () {
        console.log("O animal está correndo");
    };
    return Animais;
}());
var Cachorros = /** @class */ (function (_super) {
    __extends(Cachorros, _super);
    function Cachorros() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cachorros;
}(Animais));
var cachorro = new Cachorros();
cachorro.latir();
/*
var ato = new Animal();
animal.latir();
animal.correr();
*/ 
