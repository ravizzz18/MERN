let car = {make:"Toyota", model:"Carolla",year:2022};
console.log('Original Properties : ',Object.keys(car));
delete car.model;
console.log('After Deletion : ',car);
console.log('Length of the Object : ',Object.keys(car).length);