function Divisione() {

    this.car = '/';
    this.priorità = 2;
}
    
    Divisione.prototype.toString = function(){
        return this.car;
    };

    Divisione.prototype.getPriorità = function () {
        return this.priorità;
    };

    Divisione.prototype.valuta = function (o1, o2) {
        return o2 / o1;
    };


