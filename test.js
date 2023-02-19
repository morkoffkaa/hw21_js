//  Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

//  Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
// 
// Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, 
// чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, 
// додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

class Human {
    constructor(name, gender) {
        this.name = name
        this.gender = gender

    }
}

const oleg = new Human('Oleg', 'man');

const yana = new Human('Yana', 'woman');

const diana = new Human('Diana', 'woman');

console.log(oleg.name)
console.log(yana.gender)

class Flat {

    static people = new Array();

    static flatPeople = Array.of(oleg, yana, diana);
}

const firstFlat = new Flat;
console.log(Flat);


class House {

    static flatsAmount = new Array();

    constructor(maxAmount) {
        this.maxAmount = maxAmount
    }

    addFlat(maxAmount) {
       
        if (flatsAmount.length <= maxAmount) {
            flatsAmount2 = flatsAmount.push(Flat);
            
        }
        else console.log("Sorry, your House is fool")
        return console.log(flatsAmount2);
    }
    
}

