import { createBadge as createBadgeDot } from '../../components/badge/dot';
import { createBadge as createBadgeCount } from '../../components/badge/count';
import { createBadge as createBadgeNew } from '../../components/badge/new';

export default {
    title: 'Components/Badge',
    tags: ['autodocs'],
};

export const Dot = {
    render: () => createBadgeDot(),
}

export const New = {
    render: () => createBadgeNew(),
}

export const Count = {
    render: () => createBadgeCount(),
}