//  Латынша үлкен A және кіші  а әріпін салыстыру 

console.log( "A" == "a" );   // false ( қате ,   U+0041 == U+0061,  тең болмайды)
console.log( "A" == "a" );   // false ( қате ,   U+0041 > U+0061,   U+0041 саны U+0061 санымен артық емес) 
console.log( "A" == "a" );   // true  ( дұрыс,   U+0041 < U+0061,   U+0041 саным U+0061 санынан кіші)

//  Латынша  A әріпі крилицидағы   A әріпінтерін салыстыру 


console.log( "A" == "A" );   // false ( қате ,   U+0041 == U+0410,  тең болмайды)
console.log( "A" > "A" );   // false ( қате ,   U+0041 > U+0410,   U+0041 саны U+0410 санымен артық емес) 
console.log( "A" < "A" );   // true  ( дұрыс,   U+0041 < U+0410,   U+0041 саным U+0410 санынан кіші)