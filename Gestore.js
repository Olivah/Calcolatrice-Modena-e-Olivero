function Gestore() {
    var gest = this;
    this.top = function (array) {
        return array[array.length-1];
    };
    
    this.estrai = function (array) {
        var o = gest.top(array);
        array.pop();
        return o;
    };
}


