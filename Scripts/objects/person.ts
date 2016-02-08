module objects {
    // PERSON class
    export class Person{
        // PRIVATE INSTANCE VARIABLES 
        private _name: string;
        private _age: number;
        private _gender: string;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor(name:string, age:number, gender:string) {
            this._name = name;
            this._age = age;
            this._gender = gender;
        }
        
        public sayHello():void {
           console.log(this._name + " says hello!"); 
        }
        
        public showAge():void {
            console.log(this._name + " is " + this._age + " years old");
        }
    }
}