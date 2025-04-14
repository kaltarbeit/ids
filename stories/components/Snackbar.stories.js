import { createSnackbar } from '../../components/snackbar/default';
import { createSnackbar as creaSnackbarWithoutClose } from '../../components/snackbar/withoutClose';

export default {
    title: 'Components/Snackbar',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createSnackbar(),
}

export const WithoutCloseButton = {
    render: () => creaSnackbarWithoutClose(),
}