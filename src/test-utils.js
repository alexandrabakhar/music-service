import { ThemeProvider } from './providers/ThemeProvider';
import { render } from '@testing-library/react';

const AllProviders = ({ children }) => {

    return <ThemeProvider>{children}</ThemeProvider>;
};

export const customRender = (ui, options) =>
    render(ui, { wrapper: AllProviders, ...options });
