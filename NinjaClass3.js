class Ninja {


	constructor(name){

		this._name= name;
		this._health= 100;
		this._speed=3;
        this._strength=3;
	}
    sayName(){
        console.log("Hello, my name is "+this._name);
    }
    showStats(){
        console.log("Ninja's name is "+this._name+". Strength: "+this._strength+". Speed: "+this._speed+". Health: "+this._health+".");
    }
    drinsake(){
        this._health = this._health + 10;
        console.log ("Health is now: "+this._health);
    }

}
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this._health=200;
        this._speed=10;
        this._strength=10;
        this._wisdom=10;
    }
    speakWisdom(){
      super.drinsake();
        console.log("I am healthier!!");

    }

}
let darkNinja= new Ninja("darkNinja");

let whiteNinja=new Ninja("whiteNinja");

darkNinja.sayName();
darkNinja.showStats();
darkNinja.drinsake();


let master= new Sensei("Splinter");
master.speakWisdom();