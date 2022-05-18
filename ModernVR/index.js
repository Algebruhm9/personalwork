const day = new Date().getDay();
let Greetings = document.getElementById("Greetings").innerHTML();

switch (day) {
    case 0:
            Greetings.innerHTML("It's Sunday! Relax and enjoy the last day of your weekend")
            break;
    case 1:
            Greetings.innerHTML("Happy Monday! Have some coffee to wake up!")
            break;
    case 2:
            Greetings.innerHTML("Happy Tuesday, eat some tacos.")
            break;
    case 3:
            Greetings.innerHTML("Its hump day today.")
            break;
    case 4:
            Greetings.innerHTML("One more day until the weekend")
            break;
    case 5:
            Greetings.innerHTML("Happy Friday! Time to enjoy the weekend!")
            break;
    case 6:
            Greetings.innerHTML("Its Saturday!! Time to enjoy the weekend!")
            break;
    default:
            Greetings.innerHTML("Hmm, something went wrong...")
}