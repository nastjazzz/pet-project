import { screen, fireEvent } from '@testing-library/react';
import {
    renderWithTranslationAndRouter,
} from 'shared/lib/helpers/tests/renderWithTranslation/renderWithTranslationAndRouter';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('find sidebar', () => {
        renderWithTranslationAndRouter(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle sidebar', () => {
        renderWithTranslationAndRouter(<Sidebar />);

        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
