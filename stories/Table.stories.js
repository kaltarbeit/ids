import { createTable as createTableHorizontal } from '../components/table/horizontal';
import { createTable as createTableVertical } from '../components/table/vertical';
import { createTable as createTableExpand } from '../components/table/expand';
import { createTable as createTableSelect } from '../components/table/select';
import { createTable as createTableMix } from '../components/table/mix';

export default {
    title: 'Components/DataTable',
    tags: ['autodocs'],
};

export const HorizontalTable = {
    render: () => createTableHorizontal(),
}

export const VerticalTable = {
    render: () => createTableVertical(),
}

export const Expanded = {
    render: () => createTableExpand(),
}

export const Select = {
    render: () => createTableSelect(),
}

export const Mix = {
    render: () => createTableMix(),
}