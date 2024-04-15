import { Button, ThemeButton } from 'shared';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => { return <Button {...args} />; };

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
// Primary.decorators = [ThemeDecorator(Themes.light)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Themes.dark)];

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};
// Secondary.decorators = [ThemeDecorator(Themes.light)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};
SecondaryDark.decorators = [ThemeDecorator(Themes.dark)];

export const Bordered = Template.bind({});
Bordered.args = {
    children: 'Text',
    theme: ThemeButton.BORDER,
};
// Bordered.decorators = [ThemeDecorator(Themes.light)];

export const BorderedDark = Template.bind({});
BorderedDark.args = {
    children: 'Text',
    theme: ThemeButton.BORDER,
};
BorderedDark.decorators = [ThemeDecorator(Themes.dark)];
