//contains both our actions and our reducers

import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("increment/counter")
export const decrement = createAction("decrement/counter")
export const increaseAmount = createAction("increaseByAmount/counter")

//reducers
//1. using builder notation

const initialState = {
    value: 0
}

/** takes 2 arguments, 1 will be your initial State and next will be your callback function 
 * and this callback function accepts one argument called builder
 * 
 * */
export const counterSlice = createReducer(initialState, builder => {
    //     /** add case takes an action and a callback function and this callback function 
    //      *  has access to all your states and the action that is coming in
    //     */
    builder.addCase(increment, (state, action) => {
        state.value++
    })

    builder.addCase(decrement, (state, action) => {
        state.value--
    })
    builder.addCase(increaseAmount, (state, action) => {
        state.value += action.payload
    })
})

/**  Reducer using map notation */

// export const counterSlice = createReducer(initialState, {
//     [increment]: (state, action) => {
//         state.value++
//     },
//     [decrement]: (state, action) => {
//         state.value--
//     },
//     [increaseAmount]: (state, action) => {
//         state.value += action.payload
//     }
// })