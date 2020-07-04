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
        M(self.sInput,self.aCondition)
        return self;
    }

}
function M(sInput,aCondition){
    for(let i=0;i<sInput.length;i++){
        
    }
}
function E$(sInput){
    return new regExpObj(sInput);
}
export default E$;