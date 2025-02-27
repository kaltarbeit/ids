import { createDrawer as createDrawerFull } from '../components/drawer/full';
import { createDrawer as createDrawerModal } from '../components/drawer/modal';

export default {
    title: 'Components/Drawer',
    tags: ['autodocs'],
};

export const 풀_팝업형 = {
    render: () => createDrawerFull(),
}

export const 모달형 = {
    render: () => createDrawerModal(),
}