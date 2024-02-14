import Header, { type HeaderProps } from './Header.component';

const Template = (args: HeaderProps): JSX.Element => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Minesweeper',
};

export default {
  title: 'Header',
  component: Header,
};
