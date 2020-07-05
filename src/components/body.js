import errorFun from './error.js';
import {isCorrect,sReplace,isArrayHasString} from './method.js';
class RegExpObj {
    constructor(sInput) {
        this.sInput = sInput;
        this.aCondition = [];
        this.finally = false;
    }
    static init(sInput){
        return new RegExpObj(sInput);
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
    test(){
        const self = this;
        self.finally = true;
        
        return isCorrect(self.sInput,self.aCondition);
    }
    replace(s){
        const self = this;
        self.finally = true;
        return sReplace(self.sInput,self.aCondition,String(s));
    }

}


export default RegExpObj.init;