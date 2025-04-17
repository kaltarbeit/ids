import { createAlert as createAlertSuccess } from '../../patterns/alert/success';
import { createAlert as createAlertFail } from '../../patterns/alert/fail';
import { createAlert as createAlertInfo } from '../../patterns/alert/info';

export default {
  title: 'Patterns/Alert',
  tags: ['autodocs'],
};

export const Success = {
    render: () => createAlertSuccess(),
}

export const Fail = {
    render: () => createAlertFail(),
}

export const Info = {
    render: () => createAlertInfo(),
}