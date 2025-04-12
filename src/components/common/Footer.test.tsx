import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { appConstants } from "../../constants/app.constants";
import packageJson from '../../../package.json';

jest.mock('../../../package.json', () => ({
  version: '0.0.1'
}));

describe('Footer component', () => {
  it('should render the footer', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('should render company name and copyright', () => {
    render(<Footer />);
    expect(screen.getByText(`© 2025 ${appConstants.APP_NAME}, All rights reserved`)).toBeInTheDocument();
    expect(screen.getByText(`v.${packageJson.version}`)).toBeInTheDocument();
  });
});