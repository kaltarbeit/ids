import {createAccountCard as createAccountCardMain} from "../../../patterns/accountCard/main";
import {createAccountCard as createAccountCardAccount} from "../../../patterns/accountCard/account";
import {createAccountCard as createAccountCardTransaction} from "../../../patterns/accountCard/transaction";

export default {
    title: 'Patterns/AccountCard',
    tags: ['autodocs'],
};

export const Main = {
    render: () => createAccountCardMain(),
}

export const 전체계좌 = {
    render: () => createAccountCardAccount(),
}

export const 거래내역 = {
    render: () => createAccountCardTransaction(),
}