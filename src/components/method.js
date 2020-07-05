function isCorrect(sInput,aCondition){
    let result = true;
    for(let i=0;i<sInput.length;i++){
         let sUnitInput = sInput[i];    
         if(!isArrayHasString(aCondition[i],sUnitInput)){
             result = false;
         }
    }
     return result;
 }
 function sReplace(sInput,aCondition,s){
     let result = "";
     for(let i=0;i<sInput.length;i++){
          let sUnitInput = sInput[i];    
          if(!isArrayHasString(aCondition[i],sUnitInput)){
             result += s;
          }else{
             result += sUnitInput;
          }
     }
      return result;
  }
 function isArrayHasString(a,s){
     let result = false;
     for(let i=0;i<a.length;i++){
         if(a[i]==s){ 
             result = true;
         }
     }
     return result;
 }

 export {isCorrect,sReplace,isArrayHasString};