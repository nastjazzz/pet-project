import { Story } from '@storybook/react';
import { ThemeProvider, Themes } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Themes) => {
  return (StoryComponent: Story) => {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    );
  };
};
