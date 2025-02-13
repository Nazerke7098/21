let output = 4<7;
console.log(output);//True

console.log("A" == "a" );// false

console.log("A" > "a" );// false

console.log( "A" < "a");//true

console.log( "A" == "A" );
// false (кате, U+0041 == U+0410, тен болмайды)
console. log ( "A" > "A" );
//false (kare, U+0041 > U+0410, U+0041 саны U+0410 санынан артык емес)
console. log( "A" < "A" );

console.log("Түc" == "Түн" );

console.log("Түс" > "Түн" );// false

console.log("Түс" < "Түн" );// true

console.log("Түс" == "Түсі" ); // false

console.log("Түс" > "Түсі" ); // false

console.log("Түс" < "Түсі" ); // true

console.log( 3 < "8" ); // true

console.log("007" == 7); // true

console.log(true == 1); // true

console.log("01" != 1);// true

console.log("02" != 1);// true

console.log(false == 0);// false

console.log(false == "0" ); // true

console.log("007" === 7 );// false

console.log(true === 1);// false

console.log("01" !== 1);// true

console.log("02" !== 1);// true

console.log(false === 0);// false

console.log(false === "0" ); // false

let age = 18;

if (age >= 18) console.log("Сіз кәмелеттік жасқа толғансыз");

let y =2022;

if (y == 2022 ) {

console.log("Биыл");

console.log("Барыс жылы");

console.log("21 ғасырдың 22-ші жылы");

console.log("3-ші мыңжылдықтың 22-ші жылы");

}

if (0) {

    console.log("0 саны false мәніне түрленіп осы код орындалмайды");
    
    }
    
    if (1) {
    
    console.log("1 саны true мәніне түрленіп код орындалады");
    
    }
    
    if (45) {
    
    console.log("0-ден басқа кез келген сан true мәнін түрленіп код орындалады");
    
    }
    
    if ("Hello world!") {
    
    console.log("Кез келген жол true мәнінн түрленіп код орындалады");
    
    }
    
    if ("") {
    
    console.log("Бос жол false мәнінен түрленіп код орындалмайды");
    
    }


let year = 2022;

if (year = 2022) {

console.log("Иә. Биыл 2022 жыл!");

} else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

console.log("Сіз қателестіңіз! Биыл 2022 жыл!")

}

let hou= 8; // hour сағат

if (hou >= 6 && hou < 12) {

console.log("Қайырлы таң!");

} else if (hou >= 12 && hou < 18) {

console.log("Қайырлы күн!");

} else if (hou >= 18 && hou < 22) {

console.log("Кеш жарық!");

} else {

console.log("Қайырлы түн!");
}


let hor = 8;

let part_day = (hor >= 6 && hor < 22) ? "күн": "түн";

let access_allowed = (age > 18)? true : false;



let hour= (prompt ("a man engiz")); // hour сағат

if (hour >= 6 && hour < 12) {

document.write("Қайырлы таң!");

} else if (hour >= 12 && hour < 18) {

document.write("Қайырлы күн!");

} else if (hour >= 18 && hour < 22) {

document.write("Кеш жарық!");

} else {

document.write("Қайырлы түн!");
}
