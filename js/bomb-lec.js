(function(){
    // let color = window.prompt("what's your favorite color?");

    setTimeout(function (){
        alert("howdy How are ya?")
    }, 5000);

    let songSung = 0;

    function myInterval (){
        songSung++
        alert("Car warranty")
        if (songSung >= 5) {
            clearInterval(intervalid)
        }
    }

    let intervalid = setInterval(myInterval,3000);

    function userActive(){
        console.log("We're Good.");
        clearInterval(bankExamppleID);
        clearTimeout(logoutID);
        doBanking()
    }

    function doBanking(){
        bankExamppleID = setInterval(function (){
            warningID = setTimeout(function (){
                alert("Oops!! You're about to be logged out!!");
                logoutID = setTimeout(function (){
                    window.location = "https//google.com";
                },3000)
            },3000)
        },7000)
    }
    document.addEventListener("mousemove", userActive)

})()