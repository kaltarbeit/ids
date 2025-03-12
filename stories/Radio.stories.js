import { createRadio as createRadioDefault } from '../components/radio/default';
import { createRadio as createRadioBox } from '../components/radio/box';

export default {
    title: 'Components/RadioButton',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createRadioDefault(),
}

export const Box = {
    render: () => createRadioBox(),
}