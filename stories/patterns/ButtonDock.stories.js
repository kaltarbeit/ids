import { createButtonDock as createButtonDockWithText } from '../../patterns/buttonDock/withText';
import { createButtonDock as createButtonDockWithCheckbox } from '../../patterns/buttonDock/withCheckbox';


export default {
  title: 'Patterns/ButtonDock',
  tags: ['autodocs'],
};

export const WithText = {
    render: () => createButtonDockWithText(),
}

export const WithCheckbox = {
    render: () => createButtonDockWithCheckbox(),
}