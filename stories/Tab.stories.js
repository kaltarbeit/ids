import { createTab as createTabDefault } from '../components/tab/default';
import { createTab as createTabIcon } from '../components/tab/icon';
import { createTab as createTabDot } from '../components/tab/dot';
import { createTab as createTabSecondary } from '../components/tab/secondary';
import { createTab as createTabSegment } from '../components/tab/segment';

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

export const Secondary = {
    render: () => createTabSecondary(),
}

export const Segment = {
    render: () => createTabSegment(),
}