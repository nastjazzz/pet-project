import { Suspense } from 'react';
import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';

// import i18n from '../../i18n/i18n';
// import i18n from 'src/shared/config/i18n/i18n';

export const i18nDecorator = (StoryComponent: Story) => {
    return (
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <StoryComponent />
            </I18nextProvider>
        </Suspense>
    );
};
