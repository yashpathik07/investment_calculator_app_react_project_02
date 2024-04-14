import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newUserInput) {
        return setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newUserInput,
            };
        });
    }

    const inputIsValid = userInput.duration >= 1;

    return (
        <Fragment>
            <Header />
            <UserInput onChange={handleChange} userInput={userInput} />
            {!inputIsValid && (
                <p className="center">Please enter a duration grater than 0.</p>
            )}
            {inputIsValid && <Results input={userInput} />}
        </Fragment>
    );
}

export default App;
