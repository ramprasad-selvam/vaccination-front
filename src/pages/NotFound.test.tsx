import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe("Give page not found component", ()=>{
    it("should display page not found image", ()=> {
        render(<NotFound />)
        const imageElement = screen.getByAltText(/page not found/i)
        expect(imageElement).toBeInTheDocument();
    })
})