import React, { useState, useEffect } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const SimpleAdd = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const debouncedNum1 = useDebounce(num1, 500);
  const debouncedNum2 = useDebounce(num2, 500);

  const [result, setResult] = useState(0);

  useEffect(() => {
    if (debouncedNum1 === "" || debouncedNum2 === "") return;
    fetch(
      `https://calculator-api-163raiy6p-hinsxd.vercel.app/api/add?nums=${debouncedNum1},${debouncedNum2}`
    )
      .then((r) => r.json())
      .then((d) => {
        setResult(d.sum || 0);
      });
  }, [debouncedNum1, debouncedNum2]);
  return (
    <div className="mx-4 my-8 rounded-md p-4 border-2 border-green-300 md:px-4">
      <h1 className="text-xl py-2 text-green-700 font-bold">
        Adding two numners
      </h1>
      <div>
        <span>Input 1</span>
        <input
          type="number"
          className="border border-black border-solid ml-4"
          onChange={(e) => {
            const num =
              e.target.value === "" ? "" : parseInt(e.target.value, 10);
            setNum1(num);
          }}
        />
      </div>
      <div>
        <span>Input 2</span>
        <input
          type="number"
          className="border border-black border-solid ml-4"
          onChange={(e) => {
            const num =
              e.target.value === "" ? "" : parseInt(e.target.value, 10);
            setNum2(num);
          }}
        />
      </div>
      <div>Result: {result}</div>

      <ContributorInfo
        username="hinsxd"
        profilePic="https://avatars.githubusercontent.com/u/8574962?v=4"
      />
      <ApiInfo
        apiUrl="https://simple-calculator-api.vercel.app/api/add"
        apiName="Simple add calculator"
      />
    </div>
  );
};
export default SimpleAdd;

function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}
