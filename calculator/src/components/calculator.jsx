import { useSelector, useDispatch } from "react-redux";
import { addDigit, clear, calculate, deletedigit, percentage } from "../redux/calculatorSlice"

const formatNumber = (numStr) => {
  if (!numStr) return "";

  // do not format expressions
  if (/[+\-*/%]/.test(numStr)) return numStr;

  const num = Number(numStr);
  if (isNaN(num)) return numStr;

  return num.toLocaleString("en-IN");
};

function Calculator() {
  const { value, result } = useSelector((state) => state.calc);
  const dispatch = useDispatch();

  const btnBase =
    "text-white p-3 rounded-lg text-base font-semibold transition active:scale-95";

  return (
    <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl w-80 sm:w-96 md:w-[400px]">

      {/* Header */}
      <h2 className="text-white text-2xl font-bold text-center mb-6">
        REDUX CALCULATOR
      </h2>

      {/* Display */}
        <div className="bg-white text-black text-right p-4 rounded-xl mb-6 font-mono overflow-x-auto">

        {/* Expression */}
        <div className="text-lg text-gray-500">
            {formatNumber(value)} {result !== "" && "="}
        </div>

        {/* Result on next line */}
        {result !== "" && (
            <div className="text-3xl font-bold mt-1">
            {formatNumber(result)}
            </div>
        )}

        </div>

      {/* <div className="bg-white text-black text-right p-4 rounded-xl mb-6 font-mono overflow-x-auto">
        <div className="text-lg text-gray-500">{formatNumber(value)}</div>

        {result !== "" && (
          <div className="text-3xl font-bold">= {formatNumber(result)}</div>
        )}
      </div> */}

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-2">

        {/* AC */}
        <button
          onClick={() => dispatch(clear())}
          className={`col-span-2 bg-indigo-500 hover:bg-indigo-400 ${btnBase}`}
        >
          AC
        </button>

        {/* Delete */}
        <button
          onClick={() => dispatch(deletedigit())}
          className={`bg-indigo-500 hover:bg-indigo-400 ${btnBase}`}
        >
          ⌫
        </button>

        {/* % */}
        <button
          onClick={() => dispatch(percentage("%"))}
          className={`bg-indigo-500 hover:bg-indigo-400 ${btnBase}`}
        >
          %
        </button>

        {/* Numbers & Operators */}
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","="].map((a) => (
          <button
            key={a}
            onClick={() => {
              if (a === "=") dispatch(calculate());
              else dispatch(addDigit(a));
            }}
            className={`${
              ["/","*","-","+","%","="].includes(a)
                ? "bg-indigo-500 hover:bg-indigo-400"
                : "bg-gray-700 hover:bg-gray-600"
            } ${btnBase}`}
          >
            {a === "*" ? "×" : a}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
