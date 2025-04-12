import { render } from '@testing-library/react';
import AuthLayout from '../layouts/AuthLayout';
import { BrowserRouter as Router } from 'react-router-dom';
import { appConstants } from "../constants/app.constants";

jest.mock('../components/common/Footer', () => () => <div>Mocked Footer</div>);

describe('AuthLayout', () => {
    it('should render the navigation bar, children, and Footer', () => {
        const { getByText, getByAltText } = render(
            <Router>
                <AuthLayout>
                    <div>Test Children</div>
                </AuthLayout>
            </Router>
        );

        expect(getByAltText('Logo')).toBeInTheDocument();
        expect(getByText(appConstants.APP_NAME)).toBeInTheDocument();
        expect(getByText('Test Children')).toBeInTheDocument();
        expect(getByText('Mocked Footer')).toBeInTheDocument();
    });

    it('should render the navigation bar, Outlet, and Footer when no children are provided', () => {
        const { getByText, getByAltText } = render(
            <Router>
                <AuthLayout />
            </Router>
        );

        expect(getByAltText('Logo')).toBeInTheDocument();
        expect(getByText(appConstants.APP_NAME)).toBeInTheDocument();
        expect(getByText('Mocked Footer')).toBeInTheDocument();
        // Check if Outlet is rendered when no children are provided
        expect(document.querySelector('div.pt-4')).toBeInTheDocument();
    });
});