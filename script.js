const myRoutine = ["Wake up","Get dressed","Brush teeth","Eat breakfast","Leave for school", "Arrive at school"];
const timeEarly = ["7:15", "7:20", "7:25", "7:30","7:40", "8:15"];
const timeLate = ["7:45", "7:50", "7:55", "8:00", "8:10", "8:45"];

let myRoutineTimes = {
    "Wake up": 5,
    "Get dressed": 5,
    "Brush teeth": 5,
    "Eat Breakfast": 10,
    "Leave for school": 35,
    "Arrive at school": 0,
}

function runProgram(){

    let checkBoxEarly = document.getElementById("early");
    let checkBoxLate = document.getElementById("late");


    let genTimesEarly = [];

    let schoolStartTime = "8:30";
    let time = schoolStartTime.split(":");
    console.log(time);
    let hour = Number(time[0]);
    let min = Number(time[1]);
    let wakeUpTimeHour = hour - 1;
    let wakeUpTimeMin = min - 15;

    let currHour = wakeUpTimeHour;
    let currMin = wakeUpTimeMin;


    genTimesEarly.push(`${currHour}:${currMin}`);


    console.log(genTimesEarly)



    // console.log(`${wakeUpTimeHour}:${wakeUpTimeMin}`)







    checkBoxEarly.addEventListener('change', writeRoutine.bind(null, checkBoxEarly, timeEarly));
    checkBoxLate.addEventListener('change', writeRoutine.bind(null, checkBoxLate, timeLate));
}

// function writeRoutineGenerated(checkBox){
//     let genTimesEarly = [];

//     let startTime = ;


// }



function writeRoutine(checkBox, times){
    let div = document.querySelector("#routine");
    if(checkBox.checked === true){
        for(let i=0; i<6; i++){
            let routineStep = myRoutine[i];
            let routineTime = times[i];
            const newP = document.createElement("p");
            newP.textContent = `${routineStep} at ${routineTime}`
            console.log(newP);
            let a = document.querySelector("#myR");
            div.appendChild(newP);
        }
    }
    else{
        while(div.firstChild !== null){
            div.removeChild(div.firstChild)
        }
    }
}

// function writeRoutineLate(checkBox, times){
//     let div = document.querySelector("#routine");
//     if(checkBox.checked == true){
//         for(let i=0; i<6; i++){
//             let routineStep = myRoutine[i];
//             let routineTime = times[i];
//             const newP = document.createElement("p");
//             newP.textContent = `${routineStep} at ${routineTime}`
//             console.log(newP);
//             let a = document.querySelector("#myR");
//             div.appendChild(newP)
//         }
//     }
//     else{
//         while(div.firstChild !== null){
//             div.removeChild(div.firstChild)
//         }
//     }
// }





document.addEventListener('DOMContentLoaded', runProgram)
