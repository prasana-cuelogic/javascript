/**
 * Created by PrasanaA on 08/01/16.
 */

function jsDate(unixVal){
    var objDate = new Date(unixVal);
    return objDate.toUTCString();
}
jsDate(1452250113628);