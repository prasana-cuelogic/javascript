/**
 * Created by Prasana A on 06/01/16.
 */

//Variables & different way to declare those;
var declareVariables = function(){
    var numberVar = 5; //or
    var numberVar = new Number(5);

    var stringVar = 'string';
    var stringVar = new String('string');

    var booleanVar = false;
    var booleanVar = new Boolean(false);

    var objectVar = {'name':'Jake', 'role':'user'};
    var objectVar2 = new Object(objectVar);
    var objectVar3 = objectVar;

    var arrayVar = [1,2];
    var arrayVar1 = new Array('1',2);
    var arrayVar2 = arrayVar;

}();

//Delete and add values in array.
var myFunctions = function(){
    var arrVariable = [];
        return {
        setArray: function(arrayParam){
            return arrVariable = arrayParam;
        },
        arrayAddElementLast: function (newValue) {
            return arrVariable.push(newValue);
        },
        arrayAddElementFirst: function (newValue) {
            return arrVariable.unshift(newValue);
        },
        arryRemoveLastElement:function () {
            return arrVariable.pop();
        },
        arryRemoveFirstElement:function () {
            return arrVariable.shift();
        }
    }
};

var booleanValue = false;
booleanValue =  (booleanValue == false)?true: false;

var newString = "Hello";
newString += " World";

//Create Object
var objectVariable = {};

var objectVariable = new Object();

var objectPerson = {'name': 'jake', 'age':30};

var objectVariable =  new Object(objectPerson);



