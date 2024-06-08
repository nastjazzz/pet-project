import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nForTests';

export interface compenentRenderInterface {
    routes?: string[]
}

export function componentRender(component: ReactNode, options: compenentRenderInterface = {}) {
  const {
    routes = ['/'],
  } = options;

  return render(
    <MemoryRouter initialEntries={routes}>
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  );
}
