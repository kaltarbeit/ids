import {createBottomSheet as createBottomSheetDefault } from '../../components/bottomSheet/default';
import {createBottomSheet as createBottomSheetWithButton } from '../../components/bottomSheet/withButton';
import {createBottomSheet as createBottomSheetWithHandle } from '../../components/bottomSheet/withHandle';

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

export const WithHandle = {
    render: () => createBottomSheetWithHandle(),
}