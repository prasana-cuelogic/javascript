
var Student = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

var studentObj = student;

studentObj.prototype.fullName = function(){
    return this.firstName+" "+this.lastName;
}

var stObj = new Student('Jon', 'Doe');
alert(stObj.fullName());


