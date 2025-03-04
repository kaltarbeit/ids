import { createTextField as createTextFieldDefault } from '../components/textField/default';
import { createTextField as createTextFieldNumber } from '../components/textField/number';
import { createTextField as createTextFieldAmount } from '../components/textField/amount';
import { createTextField as createTextFieldDate } from '../components/textField/date';
import { createTextField as createTextFieldExchange } from '../components/textField/exchange';
import { createTextField as createTextFieldCurrency } from '../components/textField/currency';

export default {
    title: 'Components/TextField',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createTextFieldDefault(),
}

export const 숫자표기 = {
    render: () => createTextFieldNumber(),
}

export const 금액표기 = {
    render: () => createTextFieldAmount(),
}

export const 날짜표기 = {
    render: () => createTextFieldDate(),
}

export const 외환입력 = {
    render: () => createTextFieldExchange(),
}

export const 통화표기 = {
    render: () => createTextFieldCurrency(),
}