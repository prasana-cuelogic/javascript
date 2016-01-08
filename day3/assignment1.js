/**
 * Created by PrasanaA on 08/01/16.
 */

var fact = function(n) {
    if(n == 0) return 1;
    else return (n * fact(n-1));
};
alert(fact(5));
