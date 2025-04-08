import { createCheckbox as createCheckboxSingle } from '../components/checkbox/single';
import { createCheckbox as createCheckboxStates } from '../components/checkbox/states';
import { createCheckbox as createCheckboxMultiple } from '../components/checkbox/multiple';
import { createCheckbox as createCheckboxMark } from '../components/checkbox/mark';

export default {
    title: 'Components/Checkbox',
    tags: ['autodocs'],
};

export const States = {
    render: () => createCheckboxStates(),
}

export const 단일형 = {
    render: () => createCheckboxSingle(),
}

export const 다중선택형 = {
    render: () => createCheckboxMultiple(),
}

export const 체크마크 = {
    render: () => createCheckboxMark(),
}