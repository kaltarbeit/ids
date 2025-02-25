import {createBottomSheet as createBottomSheetDefault } from '../components/bottomSheet/default';
import {createBottomSheet as createBottomSheetWithButton } from '../components/bottomSheet/withButton';

export default {
    title: 'Components/BottomSheet',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createBottomSheetDefault(),
}

export const WithButton = {
    render: () => createBottomSheetWithButton(),
}