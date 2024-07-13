import React, {useRef, useState} from 'react';
import './App.css';


const App = () => {


    const [counter, setCounter] = useState<number>(0);

    const ref = useRef<number>(100500);


    return (
        <div>
            <button

                onClick={() => {
                    setCounter(prevState => prevState + 1);
                }}

            >click me {counter}
            </button>



            <button

                onClick={() => {
                    ref.current = ref.current + 1;
                    console.log(ref.current)
                }}

            >click me {counter}
            </button>

            <h2>ref: {ref.current}</h2>
        </div>

// 1
        // <div>
        //     <button
        //
        //         onClick={() => {
        //             setCounter((prevState): any => {
        //                 console.log('prevState', prevState);
        //                 return prevState + 1;
        //             });
        //         }}
        //
        //     >click me {counter}
    //     </button>
    // </div>

);
}

export default App;