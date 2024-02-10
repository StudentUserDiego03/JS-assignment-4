let welcome = "hello";

function myFunction(){
    let inputText = document.getElementById("name").value;
    if(inputText == "your dumb"){
        window.alert("that's not nice");
    }
    if(inputText=="no"){
        window.alert("you need to insert your name");
    }
    document.getElementById("output").innerHTML = welcome + " " + inputText;
    console.log(`${welcome} ${inputText}, it is nice to meet you`);
}
