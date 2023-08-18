import { useState } from "react";

const initialState ={
    'current-savings':10000,
    'yearly-contribution':1200,
    'expected-return':8,
    'duration':15
};

function UserFormData(props){

    const [userInput,setUserInput] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput)
    }
    
    const resetHandler = (event) => {
        setUserInput(initialState);
    }

    const changeHandler = (input,value) => {
        console.log(input, value);
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]:value
            };
        })
    };

    return(
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input value={userInput['current-savings']} onChange={(event)=>changeHandler('current-savings',event.target.value)} type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input value={userInput['yearly-contribution']} onChange={(event)=>changeHandler('yearly-contribution',event.target.value)} type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input value={userInput['expected-return']} onChange={(event)=>changeHandler('expected-return',event.target.value)} type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input value={userInput['duration']} onChange={(event)=>changeHandler('duration',event.target.value)} type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button onClick={resetHandler} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
      </form>
    );
}

export default UserFormData;