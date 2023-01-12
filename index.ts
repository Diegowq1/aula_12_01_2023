class Animais {
    latir(): void{
        console.log("AUAUAUAUAU");
    }
    correr(): void{
        console.log("O animal está correndo");
    }
    miar(): void{
        console.log("MIAUMIAU");
    }
}

class Cachorros extends Animais {
 
}
var cachorro = new Cachorros()
cachorro.latir()




/*
var ato = new Animal();
animal.latir();
animal.correr();
*/