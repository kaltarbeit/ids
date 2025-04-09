import { createDropdown as createDropdownDefault } from '../components/dropdown/default';
import { createDropdown as createDropdownEmail } from '../components/dropdown/email';
import { createDropdown as createDropdownBank } from '../components/dropdown/bank';
import { createDropdown as createDropdownBankIcon } from '../components/dropdown/bankIcon';
import { createDropdown as createDropdownBankSelect } from '../components/dropdown/bankSelect';
import { createDropdown as createDropdownSmall } from '../components/dropdown/small';
import { createDropdown as createDropdownText } from '../components/dropdown/text';
import { createDropdown as createDropdownTextSmall } from '../components/dropdown/textSmall';
import { createDropdown as createDropdownStates } from '../components/dropdown/states';

export default {
    title: 'Components/Dropdown',
    tags: ['autodocs'],
};

export const States = {
    render: () => createDropdownStates(),
}

export const Default = {
    render: () => createDropdownDefault(),
}

export const Email = {
    render: () => createDropdownEmail(),
}

export const Bank = {
    render: () => createDropdownBank(),
}

export const BankIcon = {
    render: () => createDropdownBankIcon(),
}

export const BankSelect = {
    render: () => createDropdownBankSelect(),
}

export const Small = {
    render: () => createDropdownSmall(),
}

export const Text1 = {
    render: () => createDropdownText(),
}

export const Text2 = {
    render: () => createDropdownTextSmall(),
}