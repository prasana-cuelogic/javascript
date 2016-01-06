/**
 * Created by PrasanaA on 06/01/16.
 */
var declareVariables = function(){
    var numberVar = 5; //or
    var numberVar = new Number(5);

    var stringVar = 'string';
    var stringVar = new String('string');

    var booleanVar = false;
    var booleanVar = new Boolean(false);

    var objectVar = {};
    var objectVar = new Object();

    var arrayVar = [1,2];
    var objectVar = new Array();

}();

var myFunctions = function(){
    var arrVariable = [];
    function arrayPushElementLast (newValue) {  arrVariable.push(newValue); }
    function arrayPushElementFirst (newValue) {  arrVariable.unshift(newValue); }
    function arryRemoveLastElement(){ arrVariable.pop(); }
    function arryRemoveFirstElement(){ arrVariable.shift(); }
    return arrVariable;
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



