// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
}
function appendCat(name){
    return [...cats,name];

}
function prependCat(name){
    return [name, ...cats];

}
function removeLastCat(name){
    return cats.slice(0,cats.length-1);
}
function removeFirstCat(name){
    return cats.slice(1);
}
