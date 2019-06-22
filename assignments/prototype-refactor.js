/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday X

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
constructor(options) {
    this.createdAt = options.createdAt;
    this.dimensions = options.dimensions;
  }
 destroy () {
    return `Object was removed from the game.`;
  }
}

  class CharacterStats extends GameObject {
  constructor(characterStatsOptions) {
super(characterStatsOptions); 
this.hp = characterStatsOptions.hp;
this.name = characterStatsOptions.name; 
  }
takeDamage () {
    return `${this.name} took damage.`;
  }
}

   class Humanoid extends CharacterStats {
     constructor (humanoidOptions) {
      super(humanoidOptions);
      this.cohort = humanoidOptions.cohort;
     this.weapons = humanoidOptions.weapons;
     this.language = humanoidOptions.language;
   }
   greet() {
     return `${this.name} offers a greeting in ${this.language}.`;
   }
}

    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      hp: 5,
      name: 'Bruce',
      cohort: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Russian Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      hp: 15,
      name: 'Sir Mustachio',
      cohort: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Mongolian Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      hp: 10,
      name: 'Lilith',
      cohort: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); 
    console.log(archer.dimensions); 
    console.log(swordsman.hp); 
    console.log(mage.name); 
    console.log(swordsman.cohort); 
    console.log(mage.weapons);
    console.log(archer.language); 
    console.log(archer.greet()); 
    console.log(mage.takeDamage()); 
    console.log(swordsman.destroy()); 