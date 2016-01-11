/**
 * Created by PrasanaA on 11/01/16.
 */

var objectA = { 'a': 1, 'b':2, 'c':3 };
var objectB = { 'a': 2, 'd':4, 'e':3 };

var cloneObj = (function(target, source){
    if (source === null || typeof source !== 'object'|| target === null || typeof target !== 'object'){
        return false;
    } else {
        for(var key in source){
            if(target.hasOwnProperty(key) === false) {
                target[key] = source[key]
            }
        }
    }
    return target;
})(objectA, objectB);
console.log(objectA);

