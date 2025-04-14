import { createChip as createChipSingle } from '../../components/chip/single';
import { createChip as createChipMulti } from '../../components/chip/multi';
import { createChip as createChipTag } from '../../components/chip/tag';

export default {
    title: 'Components/Chip',
    tags: ['autodocs'],
};

export const 단일선택형 = {
    render: () => createChipSingle(),
}

export const 다중선택형 = {
    render: () => createChipMulti(),
}

export const 태그형 = {
    render: () => createChipTag(),
}