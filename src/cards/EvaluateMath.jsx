import React, { useState, useEffect } from "react";
import ContributorInfo from "../components/contributorInfo";
import ApiInfo from "../components/apiInfo";

const EvaluateMath = () => {
  const [expr, setExpr] = useState("1+2");

  const debouncedExpr = useDebounce(expr, 500);

  const [result, setResult] = useState(0);
  const [error, setError] = useState("");
  useEffect(() => {
    if (debouncedExpr === "") return;
    fetch(
      `https://simple-calculator-api.vercel.app/api/eval?expr=${encodeURIComponent(
        debouncedExpr
      )}`
    )
      .then((r) => r.json())
      .then((d) => {
        if ("result" in d) {
          setResult(d.result);
          setError("");
        } else {
          setResult(null);
          setError(d.error);
        }
      });
  }, [debouncedExpr]);
  return (
    <div className="mx-4 my-8 rounded-md p-4 border-2 border-green-300 md:px-4">
      <h1 className="text-xl py-2 text-green-700 font-bold">
        Adding two numners
      </h1>
      <div>
        <span>
          Expression (e.g. 1+2){" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/bugwheels94/math-expression-evaluator#supported-symbols"
            className="text-blue-400"
          >
            See docs here
          </a>
        </span>
        <input
          value={expr}
          className="border border-black border-solid ml-4"
          onChange={(e) => {
            setExpr(e.target.value);
          }}
        />
      </div>

      <div>Result: {result}</div>
      {!!error && <div className="text-red-600">Error: {error}</div>}

      <ContributorInfo
        username="hinsxd"
        profilePic="https://avatars.githubusercontent.com/u/8574962?v=4"
      />
      <ApiInfo
        apiUrl="https://simple-calculator-api.vercel.app/api/eval"
        apiName="Evaluate Math Expression API"
      />
    </div>
  );
};
export default EvaluateMath;

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
