import { createCheckbox as createCheckboxSingle } from '../components/checkbox/single';
import { createCheckbox as createCheckboxMultiple } from '../components/checkbox/multiple';

export default {
    title: 'Components/Checkbox',
    tags: ['autodocs'],
};

export const 단일형 = {
    render: () => createCheckboxSingle(),
}

export const 다중선택형 = {
    render: () => createCheckboxMultiple(),
}