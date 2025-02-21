import {createButton as createButtonPrimary } from '../components/button/primary';
import {createButton as createButtonSecondary } from '../components/button/secondary';
import {createButton as createButtonTertiary } from '../components/button/tertiary';
import {createButton as createButtonText } from '../components/button/text';
import {createButton as createButtonFAB } from '../components/button/fab';

export default {
    title: 'Components/Button',
    tags: ['autodocs'],
};

export const Primary = {
    render: () => createButtonPrimary(),
}

export const Secondary = {
    render: () => createButtonSecondary(),
}

export const Tertiary = {
    render: () => createButtonTertiary(),
}

export const Text = {
    parameters: {
        title: 'Text Button',
        backgrounds: {
            default: 'dark',
        }
    },
    render: () => createButtonText(),
}

export const FAB = {
    render: () => createButtonFAB(),
}