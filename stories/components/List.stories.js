import { createList as createList1 } from '../../components/list/list1';
import { createList as createList2 } from '../../components/list/list2';
import { createList as createList3 } from '../../components/list/list3';
import { createList as createList4 } from '../../components/list/list4';

export default {
    title: 'Components/List',
    tags: ['autodocs'],
};

export const List1 = {
    render: () => createList1(),
}

export const List2 = {
    render: () => createList2(),
}

export const List3 = {
    render: () => createList3(),
}

export const List4 = {
    render: () => createList4(),
}