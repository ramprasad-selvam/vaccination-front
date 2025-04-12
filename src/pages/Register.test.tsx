import '@testing-library/jest-dom';
import { act, fireEvent, screen } from "@testing-library/react";
import { render } from '../test-util';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Register from "../pages/Register";
import { AuthActionTypes } from "../redux/types/authTypes";
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore([]);
const store = mockStore({ auth: {} });

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe("Register Page", () => {
  test("renders registration form correctly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Register")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your phone number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm password")).toBeInTheDocument();
  });

  test("submits form and dispatches action", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );

    act(() => fireEvent.change(screen.getByPlaceholderText("Enter your name"), { target: { value: "Test User" } }));
    act(() => fireEvent.change(screen.getByPlaceholderText("Enter your email"), { target: { value: "test@example.com" } }));
    act(() => fireEvent.change(screen.getByPlaceholderText("Enter your phone number"), { target: { value: "9876543210" } }));
    act(() => fireEvent.change(screen.getByPlaceholderText("Enter your password"), { target: { value: "password123" } }));
    act(() => fireEvent.change(screen.getByPlaceholderText("Confirm password"), { target: { value: "password123" } }));

    fireEvent.click(screen.getByText("Submit"));

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: AuthActionTypes.REGISTRATION_REQUEST,
      payload: {
        data: {
          name: "Test User",
          email: "test@example.com",
          phoneNumber: "9876543210",
          age: "",
          gender: "",
          password: "password123",
        },
        navigate: expect.any(Function),
      },
    });
  });
});