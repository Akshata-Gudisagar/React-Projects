import { ADD_REMAINDER, DELETE_REMAINDER, CLEAR_REMAINDERS} from "../constants";
import {bake_cookie, read_cookie, red_cookie } from 'sfcookies';

const remainder =(action) =>{
    let {text,dueDate} =action;
    return {
      id: Math.random(),
      text,
      dueDate
    }
}

const removeById=(state = [], id) => {
    const remainders = state.filter(remainder => remainder.id !== id )
    // console.log('new reduced remainders', remainders);
        return remainders;
}

const remainders = (state = [], action) => {
    let remainders =null;
    state = read_cookie('remainders');
    switch(action.type){
        case ADD_REMAINDER:
            remainders = [...state, remainder(action)];
            bake_cookie('remainders',remainders);
            // console.log('remainders as state', remainders);
            return remainders;
        case DELETE_REMAINDER:
            remainders = removeById(state,action.id);
            bake_cookie('remainders', remainders);
            return remainders;
        case CLEAR_REMAINDERS:
            remainders = [];
            bake_cookie('remainders',remainders);
            return remainders;

            
            default:
                return state;
    }
}

export default remainders;