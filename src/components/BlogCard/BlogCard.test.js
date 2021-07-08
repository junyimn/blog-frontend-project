import React from "react";
import { render } from "@testing-library/react";
import BlogCard from "./BlogCard";

describe("BlogCard tests", () => {
  it("should render", () => {
    expect(render(<BlogCard />)).toBeTruthy();
  });
});
