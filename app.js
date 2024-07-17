let start= document.querySelector(".start");
let tossArea=document.querySelector(".toss-area");
let choices=document.querySelectorAll(".choice");
// let tossMsg=document.querySelector(".toss-msg");
let heads=document.querySelector("#heads");
let tails=document.querySelector("#tails");
let numbers=document.querySelector(".numbers");
let number=document.querySelectorAll(".number");
let userWork=document.querySelector(".userWork");
let batBowlArea=document.querySelector(".batbowlchoosingArea");
let whenTosswon=document.querySelector(".whenTosswon");
let whenTossloss=document.querySelector(".whenTossloss");
let tosslossMsg=document.querySelector(".tossloseMsg");
let Options=document.querySelectorAll(".option");
let ok=document.querySelector("#OK");
let numbersArea=document.querySelector(".numbersArea");
let userRuns=0;
let compruns=0;

const GenCompchoice = ()=>{
    let options=["heads","tails"];
    let getIdx=Math.floor(Math.random()*2);
    return options[getIdx];
}
const tossResult=(userChoice,compChoice)=>{
   /*  start.style.fontSize="20px";
    start.style.fontWeight="bold";
    tossArea.style.fontSize="10px";
    tossArea.style.fontWeight="bold"; */
    if(userChoice===compChoice){
        whenTosswon.classList.remove("hide");
        /* start.classList.remove("hide");
       start.innerText="Congrats on winning the Toss!"
       tossArea.classList.remove("hide");
       tossMsg.innerText="Choose Batting or Bowling.";
       heads.innerText="Batting";
       tails.innerText="Bowling";
       tossMsg.style.fontSize="15px"; */
       Options.forEach((option)=>{
        option.addEventListener("click",()=>{
            let userBatBowlDecision=option.innerText;
            console.log(userBatBowlDecision);
            playGameuser(userBatBowlDecision);
            batBowlArea.classList.add("hide");
        })
       })
        
       }
    else{
       let batBowl=["Bat","Bowl"];
       let Getidx=Math.floor(Math.random()*2);
       let compBatBowlDecision=batBowl[Getidx];
       whenTossloss.classList.remove("hide");
       tosslossMsg.innerText=`Sorry computer won the toss! and chooses to ${compBatBowlDecision}.`
     
       /*   start.classList.remove("hide");
       start.innerText=`Sorry computer won the toss! and chooses to ${compBatBowlDecision}.`;
       start.style.textAlign="center";
       tossArea.classList.remove("hide");
       tails.classList.add("hide");
       tossMsg.classList.add("hide");
       heads.innerText="OK"; */
    }
}
start.addEventListener("click",()=>{
    console.log("start was clicked");
    start.classList.add("hide");
    tossArea.classList.remove("hide");
})
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        tossArea.classList.add("hide");
        let userChoice=choice.getAttribute("id");
        console.log(`${userChoice} was clicked`);
        let compChoice= GenCompchoice();
        console.log(`computer chooses ${compChoice}`);
        tossResult(userChoice,compChoice);
    })
})
ok.addEventListener("click",()=>{
    batBowlArea.classList.add("hide");
    numbersArea.classList.remove("hide");
    console.log("hello");
})
const playGameuser=(userBatBowlDecision)=>{
       if(userBatBowlDecision=="Batting"){
        numbersArea.classList.remove("hide");
        batBowlArea.classList.add("hide");
        number.forEach((number)=>{
            number.addEventListener("click",()=>{
            let runs= number.getAttribute("id");
            userRuns=userRuns+Number(runs);
            console.log(`userRuns = ${userRuns}`);
            let numOptions=[1,2,3,4,5,6];
            let GetIdx=Math.floor(Math.random()*6);
            let Runs=numOptions[GetIdx];
            console.log(`comp scores ${Runs}`);
            if(runs==Runs){
                numbers.classList.add("hide");
                userWork.innerText="Oops You are Out ! Now the computer will bat.";
                /* whenTossloss.classList.remove("hide");
                tosslossMsg.classList.add("hide");
                ok.classList.remove("hide"); */
            }
            })
        })
       }
}





