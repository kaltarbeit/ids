import { createProgressStep as createProgressStepDefault } from '../components/progressStep/default';
import { createProgressStep as createProgressStepLabel } from '../components/progressStep/label';
import { createProgressStep as createProgressStepBar } from '../components/progressStep/bar';

export default {
    title: 'Components/ProgressStep',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createProgressStepDefault(),
}

export const 단계표시 = {
    render: () => createProgressStepLabel(),
}

export const 진행 = {
    render: () => createProgressStepBar(),
}