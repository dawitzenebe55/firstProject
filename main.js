

let username = prompt("what is your name?");

let nameconfirm = confirm("just checking, " + username + " yourr eal name?");

if(nameconfirm) {
      alert("welcome to my page!");

}
    else {
        username = prompt("okay, what is you name?");
    }

    console.log("the user name is " + username + ".")

