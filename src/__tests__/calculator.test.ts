// 2.5 Challenge 1: Unit Test with a Switch and Iteration

import { isExpressionStatement } from "typescript";
import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];

describe("Calculator", () => {});
  dataset.forEach((computation) => {
    test(`the ${computation.method} method with ${computation.x} and ${computation.y}`, () => {
      switch (computation.method) {
        case "add":
          expect(calculator.add(computation.x, computation.y)).toEqual(computation.x + computation.y);
          break;
        case "subtract":
          expect(calculator.subtract(computation.x, computation.y)).toEqual(computation.x - computation.y);
          break;
        case "divide":
          expect(calculator.divide(computation.x, computation.y)).toEqual(computation.x / computation.y);
          break;
        case "multiply":
            expect(calculator.multiply(computation.x, computation.y)).toEqual(computation.x * computation.y);
            break;
          default:
            console.log("No matching compuation type");
      }
    });
  });

