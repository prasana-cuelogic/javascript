/**
 * Created by PrasanaA on 08/01/16.
 */

var buildArray = function(){
    var newArray = [];

    return{
        pushValues: function(){
            var count = 1;
            while(count <=100){
                newArray.push(count);
                count++;
            }
            return this.printArray();
        },
        printArray: function(){
            return newArray.join('\n');
        }
    };
};

var obj = buildArray();
console.log(obj.pushValues());