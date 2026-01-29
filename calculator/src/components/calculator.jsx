// import { useSelector , useDispatch } from "react-redux";
// import { addDigit , clear , calculate , deletedigit} from "../redux/calculatorSlice";

// function calculator(){

//     const value = useSelector((state) => state.calc.value);
//     const dispatch = useDispatch();

//   return (
// //     <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black p-6 rounded-3xl shadow-2xl w-80 sm:w-96 md:w-[500px] mx-auto mt-10">

// //   {/* Header */}
// //   <h2 className="text-white text-2xl font-bold text-center mb-6">REDUX CALCULATOR</h2>

// //   {/* Display */}
// //   <div className="bg-white text-black-800 text-right text-3xl p-4 rounded-xl mb-6 font-mono overflow-x-auto">
// //     {value}
// //   </div>

// //   {/* Buttons */}
// //   <div className="grid grid-cols-4 gap-3">

// //     {/* AC & Delete */}
// //     <button
// //       onClick={() => dispatch(clear())}
// //       className="col-span-2 bg-red-500 hover:bg-red-400 text-white p-4 rounded-xl text-lg font-semibold"
// //     >
// //       AC
// //     </button>

// //     <button
// //       onClick={() => dispatch(deletedigit())}
// //       className="bg-yellow-500 hover:bg-yellow-400 text-black p-4 rounded-xl text-lg font-semibold"
// //     >
// //       ⌫
// //     </button>

// //     <button
// //       onClick={() => dispatch(addDigit("/"))}
// //       className="bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-xl text-lg font-semibold"
// //     >
// //       /
// //     </button>

// //     {/* Numbers & Operators */}
// //     {["7","8","9","*","4","5","6","-","1","2","3","+","0","."].map((a) => (
// //       <button
// //         key={a}
// //         onClick={() => dispatch(addDigit(a))}
// //         className={`${
// //           a === "*" ? "bg-purple-600 hover:bg-purple-500" : "bg-gray-700 hover:bg-gray-600"
// //         } text-white p-4 rounded-xl text-lg font-semibold`}
// //       >
// //         {a === "*" ? "×" : a}
// //       </button>
// //     ))}

// //     {/* Equal Button */}
// //     <button
// //       onClick={() => dispatch(calculate())}
// //       className="col-span-2 bg-green-600 hover:bg-green-500 text-white p-4 rounded-xl text-lg font-bold"
// //     >
// //       =
// //     </button>
// //   </div>
// //     </div>
// <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black p-6 rounded-3xl shadow-2xl w-80 sm:w-96 md:w-[500px] mx-auto mt-10">

//   {/* Header */}
//   <h2 className="text-white text-2xl font-bold text-center mb-6">REDUX CALCULATOR</h2>

//   {/* Display */}
//   <div className="bg-white text-black text-right text-3xl p-4 rounded-xl mb-6 font-mono overflow-x-auto">
//     {value}
//   </div>

//   {/* Buttons */}
//   <div className="grid grid-cols-4 gap-3">

//     {/* AC & Delete */}
//     <button
//       onClick={() => dispatch(clear())}
//       className="col-span-2 bg-purple-500 hover:bg-purple-300 text-white p-4 rounded-xl text-lg font-semibold"
//     >
//       AC
//     </button>

//     <button
//       onClick={() => dispatch(deletedigit())}
//       className="col-span-2 bg-purple-500 hover:bg-purple-300 text-white p-4 rounded-xl text-lg font-semibold"
//     >
//       ⌫
//     </button>

//     {/* Numbers & Operators */}
//     {["7","8","9","*","4","5","6","-","1","2","3","+","0",".","/"].map((a) => (
//       <button
//         key={a}
//         onClick={() => dispatch(addDigit(a))}
//         className={`${
//           ["*","-","+", "/"].includes(a) // operators
//             ? "bg-purple-500 hover:bg-purple-300"
//             : "bg-gray-700 hover:bg-gray-600" // numbers
//         } text-white p-4 rounded-xl text-lg font-semibold`}
//       >
//         {a === "*" ? "×" : a}
//       </button>
//     ))}

//     {/* Equal Button */}
//     <button
//       onClick={() => dispatch(calculate())}
//       className="col-span-2 bg-green-500 hover:bg-green-300 text-white p-4 rounded-xl text-lg font-bold"
//     >
//       =
//     </button>

//   </div>
// </div>

//   );
// }

// export default calculator;

import { useSelector , useDispatch } from "react-redux";
import { addDigit , clear , calculate , deletedigit , percentage} from "../redux/calculatorSlice";

function calculator(){

    const value = useSelector((state) => state.calc.value);
    const dispatch = useDispatch();

  return (
    <>
    <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl w-80 sm:w-96 md:w-[500px]">
      {/* Header */}
        <h2 className="text-white text-2xl font-bold text-center mb-6">REDUX CALCULATOR</h2>

        {/* Display */}
        <div className="bg-white text-black text-right text-3xl p-4 rounded-xl mb-6 font-mono overflow-x-auto">
            {value}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">

        {/* AC & Delete */}
        <button
            onClick={() => dispatch(clear())}
            className="col-span-2 bg-indigo-500 hover:bg-indigo-400 text-white p-4 rounded-xl text-lg font-semibold"
            >
            AC
        </button>

        <button
            onClick={() => dispatch(deletedigit())}
            className="bg-indigo-500 hover:bg-indigo-400 text-white p-4 rounded-xl text-lg font-semibold"
            >
            ⌫
        </button>

        <button
            onClick={() => dispatch(percentage("%"))}
            className="bg-indigo-500 hover:bg-indigo-400 text-white p-4 rounded-xl text-lg font-semibold"
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
            ["/","*","-","+","%"].includes(a) // operators
                ? "bg-indigo-500 hover:bg-indigo-400"
                : "bg-gray-700 hover:bg-gray-600" // numbers
            } text-white p-4 rounded-xl text-lg font-semibold`}
            >
            {a === "*" ? "×" : a}
        </button>
        ))}

        </div>
    </div>
    </>
  );
}

export default calculator;