import { Button, ButtonTheme } from 'shared';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ButtonSize } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => { return <Button {...args} />; };

export const Primary = Template.bind({});
Primary.args = { children: 'Text' };

export const PrimarySizeS = Template.bind({});
PrimarySizeS.args = {
  children: 'Text',
  size: ButtonSize.S,
};

export const PrimarySizeM = Template.bind({});
PrimarySizeM.args = {
  children: 'Text',
  size: ButtonSize.M,
};

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
  children: 'Text',
  size: ButtonSize.L,
};

export const PrimarySizeXL = Template.bind({});
PrimarySizeXL.args = {
  children: 'Text',
  size: ButtonSize.XL,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { children: 'Text' };
PrimaryDark.decorators = [ThemeDecorator(Themes.dark)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Themes.dark)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
};

export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
};
ClearInvertedDark.decorators = [ThemeDecorator(Themes.dark)];

export const Bordered = Template.bind({});
Bordered.args = {
  children: 'Text',
  theme: ButtonTheme.BORDER,
};

export const BorderedDark = Template.bind({});
BorderedDark.args = {
  children: 'Text',
  theme: ButtonTheme.BORDER,
};
BorderedDark.decorators = [ThemeDecorator(Themes.dark)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareS = Template.bind({});
SquareS.args = {
  children: '>',
  theme: ButtonTheme.BORDER,
  size: ButtonSize.S,
  square: true,
};

export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  theme: ButtonTheme.BORDER,
  size: ButtonSize.M,
  square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ButtonTheme.BORDER,
  size: ButtonSize.L,
  square: true,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ButtonTheme.BORDER,
  size: ButtonSize.XL,
  square: true,
};
