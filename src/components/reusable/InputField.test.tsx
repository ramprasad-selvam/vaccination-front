import '@testing-library/jest-dom'
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
 
describe("InputField Component", () => {
  test("renders label and input field", () => {
    render(
      <Formik initialValues={{ name: "" }} onSubmit={jest.fn()}>
        <Form>
          <InputField label="Name" name="name" placeholder="Enter your name" />
        </Form>
      </Formik>
    );
 
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  });
 
  test("accepts user input", () => {
    render(
      <Formik initialValues={{ name: "" }} onSubmit={jest.fn()}>
        <Form>
          <InputField label="Name" name="name" placeholder="Enter your name" />
        </Form>
      </Formik>
    );
 
    const input = screen.getByPlaceholderText("Enter your name");
    act(()=>  fireEvent.change(input, { target: { value: "John Doe" } }))
    expect(input).toHaveValue("John Doe");
  });
 
  test("shows validation error when required field is empty", async () => {
    render(
      <Formik
        initialValues={{ name: "" }}
        validationSchema={Yup.object({ name: Yup.string().required("Name is required") })}
        onSubmit={jest.fn()}
      >
        <Form>
          <InputField label="Name" name="name" placeholder="Enter your name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
 
act(()=>  fireEvent.click(screen.getByText("Submit")))
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
  });
});