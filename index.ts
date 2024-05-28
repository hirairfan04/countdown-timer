#! /usr/bin/env node

import inquirer from "inquirer";

let choice= await inquirer.prompt([
    {
        message: 'Choose one option:',
        name: 'options',
        type: 'list',
        choices: ['Hour', 'Minutes', 'Seconds']
    }
])

if(choice.options == 'Hour')
    {
        let answ=await inquirer.prompt([
            {  
              message: 'Enter time in hours: ',
              name: 'hr',
              type: 'number'
          }
          ])
          
          let x = answ.hr*3600
          
          console.log(`${answ.hr} hours = ${x} seconds`)
          
          function hR(): void{    
               for(let j=x; j>=0; j--)
                  {
                      setTimeout(() => {
                          console.log(j)
                      }, (x-j)*1000)
              }
          }
          
          hR()    
    }

else if(choice.options == 'Minutes')
{
let ans=await inquirer.prompt([
  {  
    message: 'Enter time in minutes: ',
    name: 'min',
    type: 'number'
}
])

let x = ans.min*60

console.log(`${ans.min} minutes = ${x} seconds`)

function minute(): void{    
     for(let j=x; j>=0; j--)
        {
            setTimeout(() => {
                console.log(j)
            }, (x-j)*1000)
    }
}

minute()
}


else if(choice.options == 'Seconds')
{
    let answer= await inquirer.prompt([
    {
        name:'time',
        message:'Enter time:',
        input: 'number'
    }
])

function timer(): void {
    for (let i = answer.time; i>= 0; i--){ 
        setTimeout(()=>{
             console.log(i);
        },  (answer.time-i)*1000 );}
}

timer()
}
