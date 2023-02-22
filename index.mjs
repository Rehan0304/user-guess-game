import PromptSync from "prompt-sync";
const prompt=PromptSync();
const maxVAlue=11;
const num=Math.floor(Math.random()*10)+1;
// console.log(num);
let check=false;
while(!check){
    const userInput=Number(prompt("enter number between 1 and 10"));
    if(userInput<maxVAlue){
        if(userInput==num){
            check=true;
            console.log("hurray! your answer has matched"); 
        }else if(userInput>num){
            console.log("guess was high");
        }else if(userInput<num){
            console.log("guess was low");
        }
    }else{
        message="please enter between 1 and 10";
    }4
}
