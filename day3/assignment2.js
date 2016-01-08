/**
 * Created by PrasanaA on 08/01/16.
 */
var Student = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

var studentObj = student;

studentObj.prototype.printName = function(){
    return this.firstName+" "+this.lastName;
}

studentObj.prototype.fullName = function(){
    console.log(this.printName());
}

var stObj = new Student('Jon', 'Doe');
alert(stObj.fullName());

