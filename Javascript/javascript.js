function pressed(){
    let text = parseInt(document.getElementById("inp").value);
    let output = document.getElementById("output");

    if (text > 18){
        output.innerHTML = "You are older than 18! You may enter this site.";
    }else if(text == 18){
        output.innerHTML = "Congrats on reaching 18! Welcome to the site.";
    }else{ 
        output.innerHTML = "Sorry kid, not old enough to enter this site. Wait until you're 18!";
    }
}
// Testing out Switch statements by trying to output a message that corresponds with the date
const day = new Date().getDay();
//Each case # corresponds to a day like S,M,T,W,T,F,S which sends out an output depending on what the system date is
switch (Day) {
    case 0:
            console.log("Its Sunday, go watch football!")
            break;
    case 1:
            console.log("Happy Monday! Back to work.")
            break;
    case 2:
            console.log("Its Tuesday, you got this.")
            break;
    case 3:
            console.log("Hump day already??")
            break;
    case 4:
            console.log("Just one more day until the weekend.")
            break;
    case 5:
            console.log("Happy Friday! You did it!")
            break;
    case 6:
            console.log("Have a wonderful Saturday!")
            break;
    default:
            console.log("Uh oh... Something has gone wrong!")
}
/* Here is a switch statement that requires ranges to determine the placement 
of a value. Like a teacher grading a student's test.  */
const grade = prompt("");

switch (true) {
    case grade > 90:
            console.log("A");
            break;
    case grade > 80:
            console.log("B");
            break;
    case grade > 70:
            console.log("C");
            break;
    case grade > 60:
            console.log("D");
            break;
    default:
            console.log("F");
} 