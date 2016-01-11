/**
 * Created by PrasanaA on 11/01/16.
 */

var obj1 = { 'a': 1, 'b':2, 'c':3 };
var obj2 = { 'a': 2, 'd':2, 'b':3 };
var copy = Object.assign({}, obj1,obj2);
console.log(copy);