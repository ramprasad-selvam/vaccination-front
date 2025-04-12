import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './Header';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AuthActionTypes } from '../../redux/types/authTypes';

const mockStore = configureStore([]);
const initialState = {
  auth: {
    name: 'John Doe',
    role: 'user'
  }
};
const store = mockStore(initialState);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/'
  })
}));

describe('Given NavBar Component', () => {
  it('should render NavBar component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/bay healthcare/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/orders/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });

  it('should handle logout', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Logout'));

    const actions = store.getActions();
    expect(actions).toEqual([{ type: AuthActionTypes.LOGOUT, navigate: expect.any(Function) }]);
  });

  it('should highlight the active tab', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/home/i)).toHaveClass('text-yellow-500');
  });
});