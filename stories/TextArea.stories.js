import { createTextArea as createTextAreaDefault } from '../components/textArea/default';
import { createTextArea as createTextAreaLarge } from '../components/textArea/large';

export default {
    title: 'Components/TextArea',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createTextAreaDefault(),
}

export const Large = {
    render: () => createTextAreaLarge(),
}