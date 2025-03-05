import { createInputStepper as createInputStepperVertical } from '../components/inputStepper/vertical';
import { createInputStepper as createInputStepperHorizontal } from '../components/inputStepper/horizontal';

export default {
    title: 'Components/InputStepper',
    tags: ['autodocs'],
};

export const Vertical = {
    render: () => createInputStepperVertical(),
}

export const Horizontal = {
    render: () => createInputStepperHorizontal(),
}