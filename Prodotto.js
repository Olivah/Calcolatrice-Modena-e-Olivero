function Prodotto() {

    this.car = '*';
    this.priorità = 2;
}
    
    Prodotto.prototype.toString = function(){
        return this.car;
    };

    Prodotto.prototype.getPriorità = function () {
        return this.priorità;
    };

    Prodotto.prototype.valuta = function (o1, o2) {
        return o2 * o1;
    };


