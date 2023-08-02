import { screen, render, fireEvent } from '@testing-library/react';
import { NavBurger } from './NavBurger';
import '@testing-library/jest-dom';

describe('<NavBurger />', () => {
    it('При нажатии срабатывает событие onClick', () => {
        const cb = jest.fn();
        render(<NavBurger onClick={cb} />);

        fireEvent.click(screen.getByTestId('nav-burger'));
        expect(cb).toBeCalledTimes(1);
    });
});
