function ninjaConstructor(ninjaName){
    this.ninjaName= ninjaName;
    this.health= 100;
    this.speed=3;
    this.strength=3;
    this.sayName=function(){
        console.log("Ninja name: "+this.ninjaName);
    };
    this.showStats=function(){
        console.log("Name: "+this.ninjaName+" Strength: "+ this.strength + " Speed: "+this.speed + " Health: "+ this.health );
    };
    this.drinkSake=function() {
        this.health= this.health + 10;
        console.log("More health!: "+ this.health);
    
    };
    this.punch=function(Object) {
        Object.health = Object.health-5;
        console.log(this.ninjaName + " punched "+ Object.ninjaName + " Health is now: "+ Object.health);
        
    };
    this.kick=function(Object){
        // console.log(this.ninjaName);
        kick = this.strength * 15;
        Object.health= Object.health - kick;
        console.log(Object.ninjaName + " was kicked by "+this.ninjaName+". Health is now: "+ Object.health);

    }


}



let darkNinja= new ninjaConstructor("darkNinja");
let xNinja= (String);
//darkNinja instanceof ninjaConstructor;
let whiteNinja=new ninjaConstructor("whiteNinja");

// darkNinja.punch(whiteNinja);
if (darkNinja instanceof ninjaConstructor){
darkNinja.kick(whiteNinja);
}
else{null};
//darkNinja.kick(xNinja);
// ninjaConstructor('xNinja').;