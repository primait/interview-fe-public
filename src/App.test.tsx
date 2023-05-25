import { render, screen, within } from "@testing-library/react";

import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders the search input", () => {
  render(<App />);
  const searchInput = screen.getByLabelText(/search policies/i);
  expect(searchInput).toBeVisible();
});

test("renders an empty list", async () => {
  render(<App />);

  const searchInput = screen.getByLabelText(/search policies/i);
  await userEvent.type(searchInput, "empty");

  const noPolicies = screen.getByText(/no policies found/i);
  expect(noPolicies).toBeVisible();
});

test("renders policies when search input is populated", async () => {
  render(<App />);

  const searchInput = screen.getByLabelText(/search policies/i);
  await userEvent.type(searchInput, "A");

  const noPolicies = screen.queryByText(/no policies found/i);
  expect(noPolicies).toBeNull();

  const list = screen.getByRole("list");
  const items = within(list).getAllByRole("listitem");
  expect(items).toHaveLength(41);
});

describe("policy list item", () => {
  test("policy number", async () => {
    render(<App />);
    const searchInput = screen.getByLabelText(/search policies/i);
    await userEvent.type(searchInput, "A");

    const list = screen.getByRole("list");
    const firstItem = within(list).getAllByRole("listitem")[0];
    expect(within(firstItem).getByText(/P400433/i)).toBeVisible();
  });

  test("vehicle registration", async () => {
    render(<App />);
    const searchInput = screen.getByLabelText(/search policies/i);
    await userEvent.type(searchInput, "A");

    const list = screen.getByRole("list");
    const firstItem = within(list).getAllByRole("listitem")[0];
    expect(within(firstItem).getByText(/AZ78YUV/i)).toBeVisible();
  });

  test("policy start date", async () => {
    render(<App />);
    const searchInput = screen.getByLabelText(/search policies/i);
    await userEvent.type(searchInput, "A");

    const list = screen.getByRole("list");
    const firstItem = within(list).getAllByRole("listitem")[0];
    expect(within(firstItem).getByText(/25\/04\/2023/i)).toBeVisible();
  });
});

test("filters the results", async () => {
  render(<App />);
  const searchInput = screen.getByLabelText(/search policies/i);
  await userEvent.type(searchInput, "AB");
  // TODO continue
});
