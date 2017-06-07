function Differenza() {
    
    this.car = '-';
    this.priorità = 1;
}
    
    Differenza.prototype.toString = function(){
        return this.car;
    };

    Differenza.prototype.getPriorità = function () {
        return this.priorità;
    };

    Differenza.prototype.valuta = function (o1, o2) {
        return o2 - o1;
    };


