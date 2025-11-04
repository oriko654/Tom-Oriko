let eagle,lion; //statement 1
eagle=678;
lion=16
whale=eagle / lion ;
ostrich=whale * lion;
zebra=eagle+ostrich ;

function animalsData() {
document.getElementById ("div").innerHTML="The value of whale is" + whale + "."; //addition
document.getElementById("mult").innerHTML="The value of ostrich is" + ostrich +".";
document.getElementById("sub").innerHTML="The value of zebra is"+ zebra+".";
}

const cars=["KAA","Honda","Chaverlot"];//creat an array
cars[0]="Benz";//change an element
cars.push("Ranger");//add ans element
document.getElementById("demo").innerHTML=cars[0] + "<br>" +cars[1]+ "<br>"

const pi=3.14;
let person="Tom Oriko";
let answer='Yes I am.';
document.getElementById("hurry").innerHTML=pi+ "<br>" + person +"<br>"+ answer;

let x= 29;
let y= 2;
let z= x % y;
document.getElementById("get").innerHTML=z;


//function name and age are parameters.
function shake(name,age) {
    return "My name is "  + name + "and I am "+ age + " years old.";
}
document.getElementById("yake").innerHTML=shake ("Tom", 56);


}
