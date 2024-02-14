import Legend from './Legend.component';

const Template = (args: Record<string, any>): JSX.Element => (
  <Legend {...args} />
);

export const Default = Template.bind({});

export default {
  title: 'Legend',
  component: Legend,
};
