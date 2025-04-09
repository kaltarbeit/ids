import { createToggleSwitch } from '../components/toggleSwitch/default';
import { createToggleSwitch as createToggleSwitchMain } from '../components/toggleSwitch/withLabel';

export default {
    title: 'Components/ToggleSwitch',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createToggleSwitch(),
}

export const Main = {
    render: () => createToggleSwitchMain(),
}