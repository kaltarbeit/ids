import {createOverflowMenu as createOverflowMenuDefault } from '../../components/overflowMenu/default';
import {createOverflowMenu as createOverflowMenuFabMenu } from '../../components/overflowMenu/fabMenu';

export default {
    title: 'Components/OverflowMenu',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createOverflowMenuDefault(),
}

export const FABMenu = {
    render: () => createOverflowMenuFabMenu(),
}