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
        document.getElementById('promptreturn1').innerHTML = "<span id='promptretval'>" + a + " IS NOT A VALID ANSWER SAY YES OR NO WITH CORRECT CAPITALIZATION!</span>";
    }
}

function show_prompt2() {
    var b = prompt ("Do I?");

    document.getElementById('promptreturn2').innerHTML = b;
    if (b == "No") {
        document.getElementById('promptreturn2').innerHTML = "WRONG, YOU DON'T KNOW ME.";
    }
    else if (b == "Yes") {
        document.getElementById('promptreturn2').innerHTML = "CORRECT, BUT I WON'T DRAW FOR YOU";
    }
    else{
        document.getElementById('promptreturn2').innerHTML = "<span id='promptretval'>" + b + " IS NOT A VALID ANSWER SAY YES OR NO WITH CORRECT CAPITALIZATION!</span>";
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
        document.getElementById('promptreturn3').innerHTML = "<span id='promptretval'>" + c + " IS NOT A VALID ANSWER SAY YES OR NO WITH CORRECT CAPITALIZATION!</span>";
    }
}
function show_prompt4() {
    var d = prompt ("If u say yes you HAVE to help me FINANCIALLY in getting one.");

    document.getElementById('promptreturn4').innerHTML = d;
    if (d == "No") {
        document.getElementById('promptreturn4').innerHTML = "WRONG! NEXT TIME PICK THE CORRECT ANSWER!!";
    }
    else if (d == "Yes") {
        document.getElementById('promptreturn4').innerHTML = "CORRECT! NOW BUY ME ONE!!";
    }
    else{
        document.getElementById('promptreturn4').innerHTML = "<span id='promptretval'>" + d + " IS NOT A VALID ANSWER SAY YES OR NO WITH CORRECT CAPITALIZATION!</span>";
    }
}
function show_prompt5() {
    var e = prompt ("If u say yes you HAVE to help me FINANCIALLY in getting one.");

    document.getElementById('promptreturn5').innerHTML = e;
    if (e == "No") {
        document.getElementById('promptreturn5').innerHTML = "CORRECT! CONGRATS YOU CAN READ!!";
    }
    else if (e == "Yes") {
        document.getElementById('promptreturn5').innerHTML = "WRONG, YOU LITERALLY COULD HAVE LOOKED TO THE SIDE!!";
    }
    else{
        document.getElementById('promptreturn5').innerHTML = "<span id='promptretval'>" + e + " IS NOT A VALID ANSWER SAY YES OR NO WITH CORRECT CAPITALIZATION!</span>";
    }
}