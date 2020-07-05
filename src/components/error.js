const fnError = {
    isUnitOfArray(a){
        a.forEach(element => {
            let sElemant = String(element);
           if(sElemant.length > 1){
               throw new Error('the element of condition(Array) in Function then() must be unit char');
           } 
        });
    },
    isFinally(regExpObj){
        if(regExpObj.finally){
            throw new Error('the function then() must in front of the finally function')
        }
    }
}
export default fnError;