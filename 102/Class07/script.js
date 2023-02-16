function userName(){
    let thisName = prompt ("What is your name?");
    let secondName = "Molly";

    if(thisName != secondName){
        secondName = prompt("Please re-enter name!");
    }
    else{
        alert(`hello ${thisName}!`);
    }
}
function tryAgain(){
    let secondName = "Molly";
    let myName = prompt("What is your name?");
    while(myName !== secondName){
        secondName = prompt(`${myName} doesnt match our record, please try again`);
    }
    alert(`Hello there ${secondName}`);
}