const calcInputReducer = (state = '', action) =>{
    switch(action.type){
      case 'ADDINPUT':
        return state + action.payload;
      case 'SETINPUT':
        return `${action.payload}`;
    default:
        return state;
    }
}

export default calcInputReducer;
