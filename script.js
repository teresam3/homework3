var lowCase = ("abcdefghijklmnopqrstuvwyx".split(""))
var uppCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
var specChar = ("!@#$%&".split(""))
var numbers = ("1234567890".split(""))

var button = document.getElementById("button")
var display = document.getElementById("display")

var password
var characters

button.addEventListener("click", function(e) {
    var numChar = prompt("How many characters?")
        // if (numChar < 8 || numChar > 128) ;
        //     alert("another number") ; 
    var askLow = confirm("Would you like lower case letters?")
    var askUpp = confirm("Would you upper case letters?")
    var askSpecChar = confirm("Would you like specials characters?")
    var askNumbers = confirm("Would you like numbers?") 
        
        if (askLow == true) {
            characters +=  lowCase ;
        }
        else if (askUpp == true) {
            characters += uppCase ;
        }
        else if (askSpecChar == true) {
            characters += specChar ;
        }
        else if (askNumbers == true) {
            characters += numbers ;
        }
    
    
 for (var i = 0; i < numChar; i++) {
    var password = characters[Math.floor(Math.random() * characters.length)] ;
    console.log(password)

//     password.push(characters)
//  display.password.join("") ;

 }
})

    

    