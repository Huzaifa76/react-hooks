const reducer = (state , action) => {
    if (action.type==="INC"){
        return (state +=1);
    }
    if (action.type==="DEC"){
        let newNum =0;
        return state >=1 ? (newNum= state -1) : (newNum=0);
    }
    return state;
}

export default reducer