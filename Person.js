class Person {
    firstName;
    lastName;
    city;
    state;
    zipCode;
    phoneNumber;
    emailID;

    constructor(...param) {
        this.firstName = param[0];
        this.lastName = param[1];
        this.city = param[2];
        this.state = param[3];
        this.zipCode = param[4];
        this.phoneNumber = param[5];
        this.emailID = param[6];
    }
    toString(){
        return  this.firstName+","+this.lastName+","+this.city+","+this.state+","+this.zipCode+","+this.phoneNumber+","+this.emailID+"\n";
    }
}
module.exports =   Person;