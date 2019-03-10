function c1(){
    document.bgColor = "red";
    window.setTimeout("c2()", 1000);
}

function c2(){
    document.bgColor = "blue";
    window.setTimeout("c1()", 1000);
}

function background1(){
    document.body.style.backgroundImage = "url('assets/34.jpg')";
    window.setTimeout("background2()",2000);
}

function background2(){
    document.body.style.backgroundImage = "url('assets/12.jpg')";
    window.setTimeout("background3()",2000);
}
function background3(){
    document.body.style.backgroundImage = "url('assets/hazard.jpg')";
    window.setTimeout("background4()",2000);

}
function background4(){
    document.body.style.backgroundImage = "url('assets/ronaldo.jpg')";
    window.setTimeout("background5()",2000);

}
function background5(){
    document.body.style.backgroundImage = "url('assets/messi.jpg')";
    window.setTimeout("background6()",2000);

}
function background6(){
    document.body.style.backgroundImage = "url('assets/Rohit.jpg')";
    window.setTimeout("background7()",2000);

}
function background7(){
    document.body.style.backgroundImage = "url('assets/dhoni.jpg')";
    window.setTimeout("background8()",2000);

}
function background8(){
    document.body.style.backgroundImage = "url('assets/sardar.jpg')";
    window.setTimeout("background9()",2000);

}
function background9(){
    document.body.style.backgroundImage = "url('assets/kabaddi.jpg')";
    window.setTimeout("background10()",2000);

}
function background10(){
    document.body.style.backgroundImage = "url('assets/pra.jpg')";
    window.setTimeout("background11()",2000);

}
function background11(){
    document.body.style.backgroundImage = "url('assets/hockey.jpg')";
    window.setTimeout("background1()",2000);

}


function changeFirstName(){
    var firstNameInput = document.getElementById("fname");
    var firstNameValue = firstNameInput.value;
    firstNameInput.value = firstNameValue.toUpperCase();
}

function changeLastName(){
    var firstNameInput = document.getElementById("lname");
    var firstNameValue = firstNameInput.value;
    firstNameInput.value = firstNameValue.toUpperCase();
}
