import { render } from '@testing-library/react';
import MainLayout from '../layouts/MainLayout';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../components/common/Header', () => () => <div>Mocked NavBar</div>);
jest.mock('../components/common/Footer', () => () => <div>Mocked Footer</div>);

describe('MainLayout', () => {
    it('should render NavBar, children, and Footer', () => {
        const { getByText } = render(
            <Router>
                <MainLayout>
                    <div>Test Children</div>
                </MainLayout>
            </Router>
        );

        expect(getByText('Mocked NavBar')).toBeInTheDocument();
        expect(getByText('Test Children')).toBeInTheDocument();
        expect(getByText('Mocked Footer')).toBeInTheDocument();
    });

    it('should render NavBar, Outlet, and Footer when no children are provided', () => {
        const { getByText } = render(
            <Router>
                <MainLayout />
            </Router>
        );

        expect(getByText('Mocked NavBar')).toBeInTheDocument();
        expect(getByText('Mocked Footer')).toBeInTheDocument();
    });
});