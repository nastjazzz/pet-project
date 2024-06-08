import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Themes } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
    children: 'Link Example',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args: any) => { return <AppLink {...args} />; };

export const Primary = Template.bind({});
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Themes.dark)];

export const Inverted = Template.bind({});
Inverted.args = {
  theme: AppLinkTheme.PRIMARY_INVERTED,
};

export const InvertedDark = Template.bind({});
InvertedDark.args = {
  theme: AppLinkTheme.PRIMARY_INVERTED,
};
InvertedDark.decorators = [ThemeDecorator(Themes.dark)];
