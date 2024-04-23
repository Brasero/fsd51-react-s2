import {useReducer} from 'react';

const initialState = {
    count: 0,
    rolls: 10,
    isResult: false
};

const de = () => Math.floor(Math.random() * 6) + 1;

const game = (number) => {
    let count = 0;

    for(let i = 0; i < number; i++) {
        const rolls = [de(), de(), de()];
        const total = rolls.reduce((acc, curr) => acc + curr)
        if (total === 18) {
            count++;
        }
    }

    return count;
}

const gameReducer = (state, action) => {
    switch (action.type) {

        case 'SET_ROLLS':
            return {
                ...state,
                rolls: action.payload,
                count: 0,
                isResult: false
            }

        case 'ROLL':
            return {
                ...state,
                count: game(state.rolls),
                isResult: true
            }


        default:
            return state;
    }
};

const useGameReducer = () => useReducer(gameReducer, initialState);

export default useGameReducer;