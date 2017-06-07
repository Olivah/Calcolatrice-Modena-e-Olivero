function Somma() {

    this.car = '+';
    this.priorità = 1;
}
    
    Somma.prototype.toString = function(){
        return this.car;
    };

    Somma.prototype.getPriorità = function () {
        return this.priorità;
    };

    Somma.prototype.valuta = function (o1, o2) {
        return o2 + o1;
    };

