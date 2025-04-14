import { createInfoBox as createInfoBoxDefault } from '../../components/infoBox/default';
import { createInfoBox as createInfoBoxWithButton } from '../../components/infoBox/withButton';
import { createInfoBox as createInfoBoxText } from '../../components/infoBox/text';

export default {
    title: 'Components/InfoBox',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createInfoBoxDefault(),
}

export const WithButton = {
    render: () => createInfoBoxWithButton(),
}

export const Text = {
    render: () => createInfoBoxText(),
}