import { createToggleSwitch } from '../components/toggleSwitch/default';
import { createToggleSwitch as createToggleSwitchMain } from '../components/toggleSwitch/withLabel';
import { createToggleSwitch as createToggleStates } from '../components/toggleSwitch/states';

export default {
    title: 'Components/ToggleSwitch',
    tags: ['autodocs'],
};

export const States = {
    render: () => createToggleStates(),
}

export const Default = {
    render: () => createToggleSwitch(),
}

export const WithLabel = {
    render: () => createToggleSwitchMain(),
}