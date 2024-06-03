import React from "react";
import Todo from ".";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Todo", () => {
	it.only("a task should be added", async () => {
		render(<Todo />);

		const input = await screen.getByTestId("textbox");
		userEvent.type(input, "buy milk");
		userEvent.keyboard("[Enter]");
		const { getByText } = within(screen.getByTestId("todo-list"));
		expect(getByText("buy milk")).toBeTruthy();
	});

	it("a tasks should be completed", async () => {
		render(<Todo />);

		const input = await screen.getByTestId("textbox");
		await userEvent.type(input, "buy milk");
		await userEvent.keyboard("[Enter]");

		await userEvent.click(screen.getByTestId("todo-list-item"));

		expect(screen.getByTestId("todo-list-item")).toBeChecked();
	});

	it("a tasks should be uncompleted", async () => {
		render(<Todo />);

		const input = await screen.getByTestId("textbox");
		await userEvent.type(input, "buy milk");
		await userEvent.keyboard("[Enter]");

		await userEvent.click(screen.getByTestId("todo-list-item"));
		await userEvent.click(screen.getByTestId("todo-list-item"));

		expect(screen.getByTestId("todo-list-item")).not.toBeChecked();
	});

	// it("should display only completed tasks", () => {});

	// it("should display only uncompleted tasks");

	// it("should display all -> completed and uncompleted tasks");
});
