import { createTooltip as createTooltipDefault  } from '../components/tooltip/default';
import { createTooltip as createTooltipImage } from '../components/tooltip/image';
import { createTooltip as createTooltipInformation } from '../components/tooltip/information';

export default {
    title: 'Components/Tooltip',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createTooltipDefault(),
}

export const Image = {
    render: () => createTooltipImage(),
}

export const Information = {
    render: () => createTooltipInformation(),
}