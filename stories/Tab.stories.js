import { createTab as createTabDefault } from '../components/tab/default';
import { createTab as createTabIcon } from '../components/tab/icon';
import { createTab as createTabDot } from '../components/tab/dot';

export default {
    title: 'Components/Tab',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createTabDefault(),
}

export const Icon = {
    render: () => createTabIcon(),
}

export const Dot = {
    render: () => createTabDot(),
}