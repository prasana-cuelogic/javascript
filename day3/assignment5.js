/**
 * Created by PrasanaA on 08/01/16.
 */

var nestedArray = function(inputArray){
    var newArray = [];
    var mainArray = [];
    return {
        splitArray: function(){
            var lengthOfArray = inputArray.length;
            var inputLength = inputArray[0].length;

            if(lengthOfArray > 0) {
                this.buildArray(inputArray[0], inputLength);
            }
            for(var i = 0; i < lengthOfArray; i++){
                for(var t = 0; t < inputLength; t++) {
                    newArray[t].push(inputArray[i].charAt(t));
                }
            }
            return this.pushNewArray(newArray, inputLength);
        },
        buildArray: function(param, lengthOfParam){
            for(var i = 0; i < lengthOfParam; i++){
                newArray[i] = [];
            }
        },
        pushNewArray: function(processedArray, lengthOfParam){
            for(var i = 0; i < lengthOfParam; i++) {
                mainArray.push(processedArray[i]);
            }
            return mainArray;
        }
    };
};

var obj = nestedArray(['113','124','135','146','417','258']);
console.log(obj.splitArray());