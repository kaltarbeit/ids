import { createDivider as createDividerThin } from '../components/divider/thin';
import { createDivider as createDividerMiddle } from '../components/divider/middle';
import { createDivider as createDividerThick } from '../components/divider/thick';

export default {
    title: 'Components/Divider',
    tags: ['autodocs'],
};

export const Thin = {
    render: () => createDividerThin(),
}

export const Middle = {
    render: () => createDividerMiddle(),
}

export const Thick = {
    render: () => createDividerThick(),
}