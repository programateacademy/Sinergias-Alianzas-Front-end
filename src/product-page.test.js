import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, describe } from "@testing-library/react";

import Home from "./pages/Home/Home";

jest.mock("react-redux")
jest.mock("react-router-dom")

describe("testeos en home", () => {
test("Prueba unitaria home", () => {
  const component = render(<Home/>);
  expect().toBe(4);
  
  console.log(component);
});

});


