import errorFun from './error.js';

class regExpObj {
    constructor(sInput) {
        this.sInput = sInput;
        this.aCondition = [];
        this.finally = false;
    }
    then(aCondition,iNum){
        const self = this;
        errorFun.isUnitOfArray(aCondition);
        errorFun.isFinally(self);
        for(let i = 0;i<iNum;i++){
            self.aCondition.push(aCondition);
        }
        return self;
    }
    test(isLengthEqual){
        const self = this;
        self.finally = true;
        
        return isCorrect(self.sInput,self.aCondition);
    }
    replace(s){

    }

}
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

function isArrayHasString(a,s){
    let result = false;
    for(let i=0;i<a.length;i++){
        if(a[i]==s){ 
            result = true;
        }
    }
    return result;
}
function E$(sInput){
    return new regExpObj(sInput);
}
export default E$;