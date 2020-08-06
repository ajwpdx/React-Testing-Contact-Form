import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

///render ContactForm component
test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
 
  
///query inputs
const firstNameInput = screen.getByLabelText(/first name/i)
const lastNameInput = screen.getByLabelText(/last name/i)
const emailInput = screen.getByLabelText(/email/i)
const messageInput = screen.getByLabelText(/message/i)
///fill in the inputs
fireEvent.change(firstNameInput, {target: {value: 'Jordan'}})
fireEvent.change(lastNameInput, {target: {value: 'Bright'}})
fireEvent.change(emailInput, {target: {value: 'jordanb@email.com'}})
fireEvent.change(messageInput, {target: {value: 'notes go here'}})
//expect
expect(firstNameInput).toHaveValue("Jordan")

///query for the submit button
const submitButton = screen.getByRole("button", { type: /submit/i})
///click the submit

    fireEvent.click(submitButton)




});