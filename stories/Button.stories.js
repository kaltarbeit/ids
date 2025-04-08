import {createButton as createButtonPrimary } from '../components/button/primary';
import {createButton as createButtonSecondary } from '../components/button/secondary';
import {createButton as createButtonTertiary } from '../components/button/tertiary';
import {createButton as createButtonText } from '../components/button/text';
import {createButton as createButtonFAB } from '../components/button/fab';
import {createButton as createButtonIcon } from '../components/button/icon';
import {createButton as createButtonBottom } from '../components/button/bottom';
import {createButton as createButtonStates } from '../components/button/states';

export default {
    title: 'Components/Button',
    tags: ['autodocs'],
};

export const States = {
    render: () => createButtonStates(),
}

export const Primary = {
    render: () => createButtonPrimary(),
}

export const Bottom = {
    render: () => createButtonBottom(),
}

export const Secondary = {
    render: () => createButtonSecondary(),
}

export const Tertiary = {
    render: () => createButtonTertiary(),
}

export const Text = {
    render: () => createButtonText(),
}

export const FAB = {
    render: () => createButtonFAB(),
}

export const Icon = {
    render: () => createButtonIcon(),
}