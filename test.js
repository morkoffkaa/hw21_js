class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}


class Flat {
    owners = [];

    addOwner(owner) {
        if (owner instanceof Human) {
            this.owners.push(owner);
            console.log(this.owners);
        } else {
            console.log(`Error`);
        }
    }
}



class House {
    static maxAmount = 10;
    static flatsCount = 0;

    flatsInHouse = [];

    constructor(maxAmount) {
        this.maxAmount = maxAmount;
    }

    addFlat(unit) {
        if (this.flatsInHouse.length < House.maxAmount) {
            this.flatsInHouse.push(unit);
            console.log(`${this.flatsInHouse}`);
        } else {
            console.log('You House is full!');
        }
    }
}

const flat = new Flat();
const oleg = new Human('Oleg', 'man');
const yana = new Human('Yana', 'woman');
const diana = new Human('Diana', 'woman');

flat.addOwner(diana);
flat.addOwner(oleg);
flat.addOwner(yana);

const house =  new House();
const maxAmount = 10;
house.addFlat(flat);
