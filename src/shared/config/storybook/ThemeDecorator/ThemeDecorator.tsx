import { Story } from '@storybook/react';
import { Themes } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Themes) => {
  return (StoryComponent: Story) => {
    return (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    );
  };
};
