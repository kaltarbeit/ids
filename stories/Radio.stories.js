import { createRadio as createRadioDefault } from '../components/radio/default';
import { createRadio as createRadioCheckmark } from '../components/radio/checkmark';
import { createRadio as createRadioBox } from '../components/radio/box';

export default {
    title: 'Components/RadioButton',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createRadioDefault(),
}


export const Checkmark = {
    render: () => createRadioCheckmark(),
}

export const Box = {
    render: () => createRadioBox(),
}