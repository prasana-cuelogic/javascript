/**
 * Created by PrasanaA on 08/01/16.
 */

var stringCheck = function(string1, string2){
    return{
        findOcurance: function(){
            var position = 0,
                count = 0;
            var mainString = string1;
            var lengthOfString = (string2).length;
            do {
                position = mainString.indexOf(string2);
                if(position >= 0) {
                    mainString = mainString.substring(position + lengthOfString);
                    count++;
                }
             } while(position != -1);
            return (count > 0)? count: -1;
        }
    };
};

var  obj = stringCheck('this is good news', 'good');
alert(obj.findOcurance());