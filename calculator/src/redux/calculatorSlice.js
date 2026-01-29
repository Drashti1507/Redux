import { createSlice } from "@reduxjs/toolkit";

const calculatorslice = createSlice ({
    name : "calc",
    initialState : {
        value : "0",
    },

    reducers : {
        addDigit : (state, action) => {
            if(state.value === "0"){
                state.value = action.payload;
            } else  {
                state.value += action.payload;
            }
        },

        clear : (state) => {
            state.value = "0";
        },

        calculate : (state) => {
            try{
                state.value = String(eval(state.value));
            } catch {
                state.value = "Error";
            }
        },

        deletedigit : (state) => {
            if(state.value.length <= 1) {
                state.value = "0";
            }
            else {
                state.value = state.value.slice(0,-1);
            }
        },

        percentage : (state) => {
            try{
                state.value = String(eval(state.value) / 100);
            } catch {
                state.value = "Error"
            }
        }
    },
});


export const { addDigit , clear , calculate , deletedigit , percentage } = calculatorslice.actions;
export default calculatorslice.reducer;