/**
 * Created by PrasanaA on 07/01/16.
 */

//Program one.
//Type One
var mathCalculation  = function(firstNumber, secondNumber ){
    function validateNumbers(){
        if(isNaN(firstNumber) || firstNumber <= 0){
            alert(firstNumber + " is not a number");
        } else if(isNaN(secondNumber) || secondNumber <= 0){
            alert(secondNumber + " is not a number");
        } else {
            return true;
        }
        return false;
    }
    validateNumbers();
    return{
        setValues:function(a, b){
            firstNumber = a;
            secondNumber = b;
            return true;
        },
        addition: function() {
            if(validateNumbers())  return firstNumber + secondNumber;
        },
        subtract: function(){
            if(validateNumbers()) return firstNumber - secondNumber;
        },
        divide: function(){
            if(validateNumbers()) return firstNumber / secondNumber;
        },
        multiply: function(){
            if(validateNumbers()) return firstNumber * secondNumber;
        }
    };
}(5,6);

console.log(mathCalculation.addition());
console.log(mathCalculation.subtract());

console.log(mathCalculation.setValues(10,2));
console.log(mathCalculation.divide());
console.log(mathCalculation.multiply());


//Type Two
var mathCalculationWithPrototype = function(firstNumber, secondNumber){
    this.firstParam = firstNumber;
    this.secondParam = secondNumber;
}

mathCalculationWithPrototype.prototype.validate = function() {
        var firstParam = typeof this.firstParam;
        var secondParam = typeof this.secondParam;

        if( firstParam != 'number'|| this.firstParam <= 0){
            alert(this.firstParam + " is not a number");
        } else if(secondParam != 'number' || this.secondParam <= 0){
            alert(this.secondParam + " is not a number");
        } else {
            return true
        }
    return false;
}

mathCalculationWithPrototype.prototype.add = function() {
    if(this.validate()) {
        return (this.firstParam + this.secondParam);
    }
}



mathCalculationWithPrototype.prototype.subtract = function() {
    if(this.validate()) {
        return (this.firstParam - this.secondParam);
    }
}

mathCalculationWithPrototype.prototype.divide = function() {
    if(this.validate()) {
        return (this.firstParam / this.secondParam);
    }
}

mathCalculationWithPrototype.prototype.multiply = function() {
    if(this.validate()) {
        return (this.firstParam * this.secondParam);
    }
}

var obj = new mathCalculationWithPrototype(8, 4);
console.log(obj.add());
console.log(obj.subtract());
console.log(obj.divide());
console.log(obj.multiply());


//Program Two.
//Taking Multiple Arguments
var multipleCalculation = function(){
    this.argument = arguments[0];
};

multipleCalculation.prototype.validate = function() {
    var count = this.argument.length;

    if(count < 2) {
        alert('Minimum 2 arguments required');
        return false;
    } else {
        for (var i = 0; i < count; i++) {
            if ((typeof this.argument[i]) != 'number') {
                alert(this.argument[i]+" is not a number");
                return false;
            }
        }
        return count;
    }
}

var argArray = [1,2,3];
var objCalculation = new multipleCalculation(argArray);

multipleCalculation.prototype.add = function(){
    var count = this.validate();
    var result = 0;
    if(count !== false) {
        for (var i = 0; i < count; i++) {
            result += this.argument[i];
        }
        return result;
    }
    return false;
};
multipleCalculation.prototype.multiply = function(){
    var count = this.validate();
    if(count !== false) {
        var result = this.argument[0];
        for (var i = 1; i < count; i++) {
            result = result * this.argument[i];
        }
        return result;
    }
    return false;
};

alert(objCalculation.add());
alert(objCalculation.multiply());




