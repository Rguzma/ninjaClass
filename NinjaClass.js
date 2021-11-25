
// function ninjaConstructor(ninjaName){
//         var ninja = {};
// 		this.ninjaName= ninjaName;
// 		ninja.prototype.health= 100;
// 		ninja.prototype.speed=3;
//         ninja.prototype.strength=3;
//         sayName=function(){
//             console.log("Ninja name: "+this.ninjaName);
//         };
//         ninja.showStats=function(){
//             console.log("Name: "+this.ninjaName,+" Strength: "+ this.strength, + " Speed: "+this.speed,+ " Health: "+ this.health );
//         };
//         ninja.drinkSake=function() {
//             this.health + 10;
//             console.log("More health!: "+ this.health);
            
//         };

// }

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

}


let darkNinja= new ninjaConstructor("darkNinja");

darkNinja.showStats();
darkNinja.drinkSake();