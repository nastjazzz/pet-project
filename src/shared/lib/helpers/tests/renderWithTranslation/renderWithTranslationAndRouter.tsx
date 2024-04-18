import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nForTests';

export function renderWithTranslationAndRouter(component: ReactNode) {
    return render(
        <BrowserRouter>

            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>

        </BrowserRouter>,
    );
}
