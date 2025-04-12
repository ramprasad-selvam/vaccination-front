import '@testing-library/jest-dom';
import { act, fireEvent, screen } from "@testing-library/react";
import { render } from '../test-util';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Login from "../pages/Login";
import { AuthActionTypes } from "../redux/types/authTypes";
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore([]);
const store = mockStore({ auth: {} });

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe("Login Page", () => {
  test("renders login form correctly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("submits form and dispatches action", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    act(() => fireEvent.change(screen.getByPlaceholderText("Enter your email"), { target: { value: "test@example.com" } }));
    act(() => fireEvent.change(screen.getByPlaceholderText("Enter your password"), { target: { value: "password123" } }));

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: AuthActionTypes.LOGIN_REQUEST,
      payload: { values: { email: "test@example.com", password: "password123" }, navigate: expect.any(Function) },
    });
  });
});