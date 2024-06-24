import { useState } from "react";

// 커스텀 훅
// 비즈니스 로직을 커스텀 훅으로 분리
export const useCalculator = () => {
    const [input, setInput] = useState(0); // 입력창
    const [currentOperator, setCurrentOperator] = useState(null); // 연산자
    const [result, setResult] = useState(null); // 결과
    const [tempInput, setTempInput] = useState(null); // 연산에 사용될 값
    const [tempOperator, setTempOperator] = useState(null); // 연산에 사용될 연산자
    const [isClickedOperator, setIsClickedOperator] = useState(false); // 선택상태
    const [isClickedEqual, setIsClieckedEqual] = useState(false); // =

    // const hasInput = input ? true : false;
    const hasInput = !!input; // 값을 boolean으로 변경함

    const onPressNum = (num) => {
        if (currentOperator && isClickedOperator) {
            setResult(input)
            setInput(num)   
            setIsClickedOperator(false);
        } else {
        // const newInput = input + num // bad case
        const newInput = Number(`${input}${num}`) // 문자열로 붙인 다음에 Number로 초기화
        setInput(newInput);   
        }
    }

    const onPressOperator = (operator) => {
        if (operator !== "=") {
            setCurrentOperator(operator);
            setIsClickedOperator(true);
            setIsClieckedEqual(false);
        } else {
            let finalResult = result;
            const finalInput = isClickedEqual ? tempInput : input;
            const finalOperator = isClickedEqual ? tempOperator : currentOperator;
            switch (currentOperator) {
                case "+":
                    finalResult = result + finalInput;
                    break;
                case "-":
                    finalResult = result - finalInput;
                    break;
                case "*":
                    finalResult = result * finalInput;
                    break;
                case "/":
                    finalResult = result / finalInput;
                    break;
                default: break;
            }
            setResult(finalResult);
            setInput(finalResult);
            setTempInput(finalInput);
            setCurrentOperator(null);
            setTempOperator(finalOperator);
            setIsClieckedEqual(true);
        }
    }

    const onPressReset = () => {
        if (hasInput) {
            setInput(0);
        } else {
            setInput(0);
            setCurrentOperator(null);
            setResult(null);
            setTempInput(null);
            setTempOperator(null);
        }
    }

    return {
        input,
        currentOperator,
        result,
        tempInput,
        tempOperator,
        hasInput,
        onPressNum,
        onPressOperator,
        onPressReset
    }
};