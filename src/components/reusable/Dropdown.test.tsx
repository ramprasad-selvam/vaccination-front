import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Dropdown from "./Dropdown";
 
const options = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];
 
describe("Dropdown Component", () => {
  test("renders label and options", () => {
    render(
      <Formik initialValues={{ gender: "" }} onSubmit={jest.fn()}>
        <Form>
          <Dropdown label="Gender" name="gender" options={options} />
        </Form>
      </Formik>
    );
 
    expect(screen.getByLabelText("Gender")).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.getByText("Female")).toBeInTheDocument();
  });
 
  test("allows user to select an option", () => {
    render(
      <Formik initialValues={{ gender: "" }} onSubmit={jest.fn()}>
        <Form>
          <Dropdown label="Gender" name="gender" options={options} />
        </Form>
      </Formik>
    );
 
    const select = screen.getByLabelText("Gender");
    fireEvent.change(select, { target: { value: "female" } });
 
    expect(select).toHaveValue("female");
  });
 
  test("shows validation error when no option is selected", async () => {
    render(
      <Formik
        initialValues={{ gender: "" }}
        validationSchema={Yup.object({ gender: Yup.string().required("Gender is required") })}
        onSubmit={jest.fn()}
      >
        <Form>
          <Dropdown label="Gender" name="gender" options={options} />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
 
fireEvent.click(screen.getByText("Submit"));
    expect(await screen.findByText("Gender is required")).toBeInTheDocument();
  });
});