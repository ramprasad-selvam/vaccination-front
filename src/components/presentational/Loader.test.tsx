import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
    it('should render the loader with correct styles', () => {
        const { container } = render(<Loader />);
        const loaderDiv = container.querySelector('div > div');

        expect(loaderDiv).toBeInTheDocument();
        expect(loaderDiv).toHaveClass('w-6 h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin');
    });

    it('should render the loader centered on the page', () => {
        const { container } = render(<Loader />);
        const parentDiv = container.querySelector('div');

        expect(parentDiv).toBeInTheDocument();
        expect(parentDiv).toHaveClass('flex items-center justify-center');
    });
});