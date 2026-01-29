import { createSlice } from "@reduxjs/toolkit";

const operators = ["+","-","*","/","%"];

const calculatorslice = createSlice({
  name: "calc",
  initialState: {
    value: "0",
    result: "",
  },

  reducers: {

    addDigit: (state, action) => {
      const val = action.payload;

      // reset if Error
    //   if (state.value === "Error") {
    //     state.value = "0";
    //     state.result = "";
    //   }

      // AFTER RESULT → operator continues calc
      if (state.result && operators.includes(val)) {
        state.value = state.result + val;
        state.result = "";
        return;
      }

      // AFTER RESULT → number starts new calc
      if (state.result && !operators.includes(val)) {
        state.value = val;
        state.result = "";
        return;
      }

      // prevent operator first
      if (state.value === "0" && operators.includes(val)) return;

      // prevent double operators
      const lastChar = state.value[state.value.length - 1];
      if (operators.includes(lastChar) && operators.includes(val)) return;

    //   prevent multiple dots in same number
      if (val === ".") {
        const parts = state.value.split(/[\+\-\*\/%]/);
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes(".")) return;
      }

      if (state.value === "0") state.value = val;
      else state.value += val;

      state.result = "";
    },

    clear: (state) => {
      state.value = "0";
      state.result = "";
    },

    calculate: (state) => {
    //   if (state.value === "Error") {
    //     state.value = "0";
    //     state.result = "";
    //     return;
    //   }

      const lastChar = state.value[state.value.length - 1];
      if (operators.includes(lastChar)) {
        // state.result = "0";
        return;
      }

      try {
        const res = eval(state.value);
        state.result = String(res);
      } catch {
        state.result = "";
      }
    },

    deletedigit: (state) => {
    //   if (state.value === "Error") {
    //     state.value = "0";
    //     state.result = "";
    //     return;
    //   }

      if (state.value.length <= 1) state.value = "0";
      else state.value = state.value.slice(0, -1);

      state.result = "";
    },

    percentage: (state) => {

        // if only 0, do nothing
        if (state.value === "0") {
            state.result = "";
            return;
        }

        try {
            const value = eval(state.value);
            state.value = String(value / 100);
            state.result = "";
        } catch {
            state.value = "0";
            state.result = "";
        }
    }

  },
});

export const { addDigit, clear, calculate, deletedigit, percentage } =  calculatorslice.actions;
export default calculatorslice.reducer;