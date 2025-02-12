import { render, screen, fireEvent } from "@testing-library/vue";
import Counter from "../src/components/Counter.vue";
import { describe, it, expect } from "vitest";

describe("Counter.vue", () => {
  it("renders the counter with initial value", () => {
    render(Counter);
    expect(screen.getByText("Counter: 0")).toBeTruthy();
  });

  it("increments the counter on button click", async () => {
    render(Counter);

    const buttons = screen.getAllByRole("button", { name: "Increment" });

    await fireEvent.click(buttons[0]);
    expect(screen.getByText("Counter: 1")).toBeTruthy();

    await fireEvent.click(buttons[0]);
    expect(screen.getByText("Counter: 2")).toBeTruthy();
  });
});
