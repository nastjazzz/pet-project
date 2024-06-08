import { Modal } from 'shared';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: any) => { return <Modal {...args} />; };

export const Primary = Template.bind({});
Primary.args = { children: 'Text100000', isOpen: true };

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { children: 'Text100000', isOpen: true };
PrimaryDark.decorators = [ThemeDecorator(Themes.dark)];
