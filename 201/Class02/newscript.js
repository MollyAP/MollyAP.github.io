function whodat() {
    myname = prompt("What is your name?");
    let name = (myname);
    alert(name + "? Interesting, alright then.");
    document.getElementById('name').innerHTML = "<span id='name'>"+name+"</span>";
}
whodat();
function show_prompt1() {
    var a = prompt ("Help I forgot :(");

    document.getElementById('promptreturn1').innerHTML = a;
    if (a == "No") {
        document.getElementById('promptreturn1').innerHTML = "WRONG... MAYBE?";
    }
    else if (a == "Yes") {
        document.getElementById('promptreturn1').innerHTML = "CORRECT... I THINK?";
    }
    else{
        document.getElementById('promptreturn1').innerHTML = "<span id='promptretval'>" + a.toLocaleUpperCase() + " IS NOT A VALID ANSWER "+ myname.toLocaleUpperCase() +" SAY YES OR NO WITH CORRECT CAPITALIZATION!</span>";
    }
}

function show_prompt2() {
    var b = prompt ("Do I?");

    document.getElementById('promptreturn2').innerHTML = b;
    if (b == "No") {
        document.getElementById('promptreturn2').innerHTML = "WRONG, YOU DON'T KNOW ME.";
    }
    else if (b == "Yes") {
        document.getElementById('promptreturn2').innerHTML = "CORRECT, BUT I WON'T DRAW FOR YOU, "+myname.toLocaleUpperCase();
    }
    else{
        document.getElementById('promptreturn2').innerHTML = "<span id='promptretval'>" + b.toLocaleUpperCase() + " IS NOT A VALID ANSWER "+ myname.toLocaleUpperCase() +" SAY YES OR NO WITH CORRECT CAPITALIZATION!</span>";
    }
}
function show_prompt3() {
    var c = prompt ("I hope the answer is Yes.");

    document.getElementById('promptreturn3').innerHTML = c;
    if (c == "No") {
        document.getElementById('promptreturn3').innerHTML = "CORRECT, I'M GONNA GO CRY NOW...";
    }
    else if (c == "Yes") {
        document.getElementById('promptreturn3').innerHTML = "WRONG, BUT I WISH IT WAS CORRECT...";
    }
    else{
        document.getElementById('promptreturn3').innerHTML = "<span id='promptretval'>" + c.toLocaleUpperCase() + " IS NOT A VALID ANSWER "+ myname.toLocaleUpperCase() +" SAY YES OR NO WITH CORRECT CAPITALIZATION!</span>";
    }
}
function show_prompt4() {
    var d = prompt ("If u say yes you HAVE to help me FINANCIALLY in getting one.");

    document.getElementById('promptreturn4').innerHTML = d;
    if (d == "No") {
        document.getElementById('promptreturn4').innerHTML = "WRONG! HOW ABOUT NEXT TIME YOU PICK THE CORRECT ANSWER "+myname.toLocaleUpperCase()+"!!";
    }
    else if (d == "Yes") {
        document.getElementById('promptreturn4').innerHTML = "CORRECT! NOW BUY ME ONE!!";
    }
    else{
        document.getElementById('promptreturn4').innerHTML = "<span id='promptretval'>" + d.toLocaleUpperCase() + " IS NOT A VALID ANSWER "+ myname.toLocaleUpperCase() +" SAY YES OR NO WITH CORRECT CAPITALIZATION!</span>";
    }
}
function show_prompt5() {
    var e = prompt ("Molly IS pretty smart so idk...");

    document.getElementById('promptreturn5').innerHTML = e;
    if (e == "No") {
        document.getElementById('promptreturn5').innerHTML = "CORRECT! IT'S OFFICIAL!! "+myname.toLocaleUpperCase()+" CAN READ!!! CONGRATS!!!!";
    }
    else if (e == "Yes") {
        document.getElementById('promptreturn5').innerHTML = "WRONG, YOU LITERALLY COULD HAVE LOOKED TO THE SIDE "+myname.toLocaleUpperCase()+"!!";
    }
    else{
        document.getElementById('promptreturn5').innerHTML = "<span id='promptretval'>" + e.toLocaleUpperCase() + " IS NOT A VALID ANSWER "+ myname.toLocaleUpperCase() +" SAY YES OR NO WITH CORRECT CAPITALIZATION!</span>";
    }
}


function thisFunc() {

    userAns = prompt("Let's here em");

    let thisArray = [10, 6, 4, 12, "Hello"];


        if (userAns != thisArray){
            alert("WRONG");
            userAns = prompt("Please guess a number again!");
        }
    else if(userAns == thisArray){
            alert("YES");
    }
}



function promptUser(expectedAnswer) {
  let chancesLeft = 4;
  let answeredCorrectly = 5;
  
  while (chancesLeft > 0) {
    userAns = prompt("Please guess a number between 1 and 10! :)");


    
        if (userAns < 4){
            alert("Your number is too low! Try again!");
            userAns = prompt("Please guess a number again!");
        }
    else if(userAns > 4){
        alert("Your number is too high! Try again!");
        userAns = prompt("Please guess a number again!");
    }
}
    if (userAns = 4){
        alert("You guessed right!!!");
    }
}
    
    chancesLeft--;
  
  if (!answeredCorrectly) {
    alert('You are out of chances!');
  }
