import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import AllProviders from './AllProviders';

const renderWithProviders = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, { wrapper: AllProviders, ...options });
};

export { renderWithProviders as render };