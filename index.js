// code your solution here

function saturdayFun(funThing) {
   if (funThing){
      return (`This Saturday, I want to ${funThing}!` )
   } else {
      return (`This Saturday, I want to roller-skate!`)
   }
}

function mondayWork(work) {
   if (work){
      return (`This Monday, I will ${work}.`)
   } else {
      return (`This Monday, I will go to the office.`)
   }
}

function wrapAdjective(flair) {
   let specialWord = "special"
   return function (adjective) {
      if (adjective) {
         return (`You are ${flair}${adjective}${flair}!`) 
      } else {
         return (`You are ${flair}${specialWord}${flair}!`)
      }
   }
}



