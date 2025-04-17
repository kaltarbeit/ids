import { createEmptyStates as createEmptyStatesDefault } from '../../patterns/emptyStates/default';
import { createEmptyStates as createEmptyStatesIcon } from '../../patterns/emptyStates/icon';

export default {
  title: 'Patterns/EmptyStates',
  tags: ['autodocs'],
};

export const Default = {
    render: () => createEmptyStatesDefault(),
}

export const Icon = {
    render: () => createEmptyStatesIcon(),
}