import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, describe } from "@testing-library/react";

import Home from "./pages/Home/Home";

jest.mock("react-redux")
jest.mock("react-router-dom")

// describe("testeos", () => {

test("Prueba unitaria home", () => {
  const component = render(<Home/>);
  console.log(component);
});

// });
