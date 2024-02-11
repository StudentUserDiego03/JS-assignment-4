let welcome = "hello";

function myFunction(){
    let inputText = document.getElementById("name").value;
    if(inputText == "your dumb"){
        window.alert("that's not nice"); // if you type in either "your dumb" or "no" you will get an alert from the system.
    }
    if(inputText=="no"){
        window.alert("you need to insert your name");
    }
    document.getElementById("output").innerHTML = welcome + " " + inputText + ", enter a username";
    console.log(`${welcome} ${inputText}, it is nice to meet you`);
    console.log(`number of characters used : ${inputText.length}`);//strig method
    console.log(inputText.length.toFixed(2)); //number method
}


