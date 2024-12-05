
// assingment 5



var car = {
    made:"toyota",
    model:"carmy",
    year:2009
}

 // display object

 console.log(car) //    made:"toyota", model:"carmy", year:2009

// access and display one by one 

console.log(car.made)  //  made:"toyota"
console.log(car.model) //  model:"carmy"
console.log(car.year) //  year:2009


// modify the propery of (year: 2009)  into (year:2010)

car.year=2010;

console.log(car) //   made:"toyota", model:"carmy", year:2010

// use loop to display all properties


// ??????????


// add method called (color)

car.color=function(){
    return 0;
}

console.log(car) // made:"toyota", model:"carmy", year:2010 , color:f()



// delete any property

delete car.made;
delete car.model;
delete car.year;
delete car.color;

// print remaining

console.log(car) // {}   >>> this  means this objet has no properties








