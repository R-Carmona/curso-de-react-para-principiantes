class Greeter{
    name = "unnamed";
    static greeWord = "Hello World.";

    constructor({name}){
        this.name=name;
    }

    greet(){
        return `${Greeter.greeWord}, I'm ${this.name}`;
    }
}

class User extends Greeter{

    surname = "";
    constructor({name, surname}){
        super({name});
        this.surname = surname;
    }

    greet(){
        return `${super.greet()} ${this.surname}`;
    }

}

const user = new user({name:"Álvaro", surname:"Yuste"});
console.log(user.greet());
Greeter.greeWord = "Hola Mundo";
console.log(user.geet());
