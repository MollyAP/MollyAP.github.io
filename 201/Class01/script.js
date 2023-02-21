function show_prompt1() {
    var a = prompt("Amares or Alcyon");

    document.getElementById('promptreturn1').innerHTML = a;
    if (a == null) {
        document.getElementById('promptreturn1').innerHTML = "NO! you MUST pick a girl";
    }else{
        document.getElementById('promptreturn1').innerHTML = "<span id='promptretval'> Oh so " + a + " is your favourite? That's cool</span>";
    }
}

function show_prompt2() {
    var b = prompt("Why did you pick her?");

    document.getElementById('promptreturn2').innerHTML = b;
    if (b == null) {
        document.getElementById('promptreturn2').innerHTML = "Come on!! Tell me!";
    }else{
        document.getElementById('promptreturn2').innerHTML = "<span id='promptretval'> Oh that's interesting, " + b + " Ok.</span>";
    }
}

function show_prompt3() {
    var c = prompt("Did their different horn sizes/styles influence you at all?");

    document.getElementById('promptreturn3').innerHTML = c;
    if (c == null) {
        document.getElementById('promptreturn3').innerHTML = "I won't judge you for your horn preference";
    }else{
        document.getElementById('promptreturn3').innerHTML = "<span id='promptretval'>" + c + "? Ok Ok, I see, alright then.</span>";
    }
}

function show_prompt4() {
    var d = prompt("Anything else you'd like to say about them?");

    document.getElementById('promptreturn4').innerHTML = d;
    if (d == null) {
        document.getElementById('promptreturn4').innerHTML = "I want an answer!";
    }else{
        document.getElementById('promptreturn4').innerHTML = "<span id='promptretval'>" + d + "? WOW, Ok.</span>";
    }
}