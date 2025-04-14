import { createPagination } from '../../components/pagination/pagination';
import { createIndicator } from '../../components/pagination/indicator';
import { createMore } from '../../components/pagination/more';

export default {
    title: 'Components/Pagination',
    tags: ['autodocs'],
};

export const Pagination = {
    render: () => createPagination(),
}

export const Indicator = {
    render: () => createIndicator(),
}

export const LoadMore = {
    render: () => createMore(),
}