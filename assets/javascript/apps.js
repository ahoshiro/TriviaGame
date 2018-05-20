$(document).ready(function() {
    // Variable declaration
    var coundDownTimer=0, correctAnswers=0, incorrectAnswers=0, temporaryValue, randomIndex, totalGuesses=0, messages, gameArraySize=0, randomContent=[],
        arrayIterator=0, userSelected =0, arrayAnswer=0, clockRunning=false, intervalID,timerCount=10, count=10, timeExpired=false;
    
        setup();  
    
        function setup() {
        messages = {
            victory: "You're a true car buff! WOW!!",
            defeat: "Not too bad. Maybe you should try again Pizza Boy!",
            correct: "You have answered WISELY young grasshopper!",
            incorrect: "You have chosen poorly, Failure is not an OPTION!",
            gameover: "Game Over! Well done"

        };
        //console.log(messages.defeat);
          // Array order:[Question, answer 1, answer 2, answer 3, answer 4, image source, correct answer in array position]
        gameVariableArrays = [  ["The Rotary Engine is also known as:","Spinner","Boxer", "Ninja Star Configuration", "Wankel","assets/images/wankel.jpg",4],
                                ["Which American car company was set to buy Ferrari in 1963? ", "General Motors", "Dodge", "Ford", "American Motor Company","assets/images/ford.jpg",3],
                                ["What is Toyota's Luxury brand line called?","Lexus", "Scion", "Genesis","Acura","assets/images/Lexus.jpg",1],
                                ["The main component on an engine head that lobes controls the valves is known as","crankshaft","camshaft","flywheel","piston","assets/images/camshaft.jpg",2],
                                ["This device uses the exhaust gasses to pressurize the intake", "Supercharger", "Pulley","Turbocharger","Muffler","assets/images/turbo.jpg",3],
                                ["This device allows the coolant to flow into the engine proportionally to fluid temperature","Thermostat","Water Pump", "Radiator","Flux capacitor","assets/images/Thermostat.jpg",1],
                                ["This engine completes a power cycle during one crankshaft revolution","four-stroke","two-stroke","one-stroke","half-stroke","assets/images/2 cycle.jpg",2],
                                ["This engine completes a power cycle during two crankshaft revolutions","four-stroke","two-stroke","one-stroke","half-stroke","assets/images/4 stroke.gif",1],
                                ["BMW stands for","Belgium Motor Works","Brazilian Motor Works", "Bratwurst Motor Works","Bavarian Motor Works","assets/images/BMW.jpg",4],
                                ["The Boxer engine is also known as","Rotary Engine","Vane Motor","Horizontal","Inline","assets/images/Boxer.jpg",3],
                            ];
                          
        //console.log(gameVariableArrays[2][0])
        gameArraySize = gameVariableArrays.length

        alert("You have 10 seconds to complete each question. Good luck!");

        //Updates the Question and alternate answers to be clicked on. 
        update();                    

        // function shuffle(gameVariableArrays) {
        //     gameArraySize = gameVariableArrays.length, temporaryValue, randomIndex;

        // while (gameArraySize) {
        //     randomIndex = Math.floor(Math.random() * gameArraySize--);
        //     temporaryValue = gameVariableArrays[gameArraySize];
        //     gameVariableArrays[gameArraySize] = gameVariableArrays[randomIndex];
        //     gameVariableArrays[randomIndex] = temporaryValue;
        // }
        // return gameVariableArrays;
        
        // console.log(gameVariableArrays);
        // }
        clockRunning = true;
        timeExpired = false;
        run();
    };

    function run(){

        if (arrayIterator < gameArraySize) {

            $("#answer1").click(function(){
                console.log("Clicked on 1");
                userSelected = 1;
                eval();                
            });
            $("#answer2").click(function(){
                console.log("Clicked on 2");
                userSelected = 2;
                eval();
            });
            $("#answer3").click(function(){
                console.log("Clicked on 3");
                userSelected = 3;
                eval();
            });
            $("#answer4").click(function(){
                console.log("Clicked on 4");
                userSelected = 4;
                eval();
            });
            console.log("Timer count "+ count +"Timer status"+ timeExpired)
            console.log("Array iterator count: " + arrayIterator);
                    
            return false;

        };
    };

    function eval(){
        //Updates the Question and alternate answers to be clicked on. 

        if(arrayIterator < gameArraySize){
            timeExpired = false;
            count = 10;
            totalGuesses ++;
            //puts the correct array "answer" into an array location.
            arrayAnswer = (gameVariableArrays[arrayIterator][6])
            console.log(gameVariableArrays[arrayIterator][5]);
            document.getElementById("answerImage").src=(gameVariableArrays[arrayIterator][5]);
            document.getElementById("answerTitle").innerHTML=("The correct Answer is: "+gameVariableArrays[arrayIterator][arrayAnswer]);
            console.log("Display answer "+(gameVariableArrays[arrayIterator][arrayAnswer]));

            if (userSelected == arrayAnswer){
                document.getElementById("answerText").innerHTML = (messages.correct);
                console.log("correct answer: "+ (arrayAnswer));
                correctAnswers ++;
                document.getElementById("correctCount").innerHTML = ("Correct: " + correctAnswers);    
            }

            else {
                document.getElementById("answerText").innerHTML = (messages.incorrect);
                console.log("incorrect answer: "+ (arrayAnswer));
                incorrectAnswers ++;
                document.getElementById("incorrectCount").innerHTML = ("Incorrect: " + incorrectAnswers);                                 
            }
            console.log("total guesses:"+totalGuesses);
            
            if (arrayIterator == (gameArraySize-1)){ 
                clearInterval(counter);            
                alert("Game Over; Well done! You answered " + correctAnswers +" correct answer(s) and "+ incorrectAnswers + " incorrect answer(s)!" );   
            } else {
            arrayIterator ++;
            console.log("array iterator: "+arrayIterator);
            update();
            };
        }; 
    };
    function update(){          
        document.getElementById("question").innerHTML = (gameVariableArrays[arrayIterator][0]);
        document.getElementById("answer1").innerHTML = (gameVariableArrays[arrayIterator][1]);
        document.getElementById("answer2").innerHTML = (gameVariableArrays[arrayIterator][2]);
        document.getElementById("answer3").innerHTML = (gameVariableArrays[arrayIterator][3]);
        document.getElementById("answer4").innerHTML = (gameVariableArrays[arrayIterator][4]);
        console.log("array iterator: "+ arrayIterator +" ,game array size: "+ gameArraySize);
        timer();
    };  
    
    var counter=setInterval(timer,1000);
    function timer(){  
        count = count-1;
        if (count <= 0) {
            document.getElementById("timerCount").innerHTML = ("Time is UP Johnny, too slow!");
            timeExpired = true;
            console.log("Time Expired");
            userSelected = 5;
            alert("Time is up Johnny, You're too slow!");
            count = 10;
            eval();
            return;
        }else {
            console.log(count);
            document.getElementById("timerCount").innerHTML = ("You have: " + count + " secs remaining");
        };    
    };         
    // shuffle();
});       