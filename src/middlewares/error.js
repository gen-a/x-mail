export const error = store => next => action=> {
    try{
        next(action);
    }catch(e){
        console.error('Error', action);
    }
};