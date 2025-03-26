import { createTextField as createTextFieldDefault } from '../components/textField/default';
import { createTextField as createTextFieldNumber } from '../components/textField/number';
import { createTextField as createTextFieldAmount } from '../components/textField/amount';
import { createTextField as createTextFieldDate } from '../components/textField/date';
import { createTextField as createTextFieldExchange } from '../components/textField/exchange';
import { createTextField as createTextFieldCurrency } from '../components/textField/currency';
import { createTextField as createTextFieldRange } from '../components/textField/range';
import { createTextField as createTextFieldEmail } from '../components/textField/email';
import { createTextField as createTextFieldSeparate } from '../components/textField/separate';
import { createTextField as createTextFieldButton } from '../components/textField/button';
import { createTextField as createTextFieldSearch } from '../components/textField/search';
import { createTextField as createTextFieldAccount } from '../components/textField/account';
import { createTextField as createTextFieldRegistrationNumber } from '../components/textField/registrationNumber';
import { createTextField as createTextFieldPhone } from '../components/textField/phone';
import { createTextField as createTextFieldFax } from '../components/textField/fax';
import { createTextField as createTextFieldBusinessNumber } from '../components/textField/businessNumber';
import { createTextField as createTextFieldEnglishName } from '../components/textField/englishName';
import { createTextField as createTextFieldCardNumber } from '../components/textField/cardNumber';
import { createTextField as createTextFieldPassword } from '../components/textField/password';
import { createTextField as createTextFieldAuthCode } from '../components/textField/authCode';
import { createTextField as createTextFieldAuthPassword } from '../components/textField/authPassword';
import { createTextField as createTextFieldAuthTime } from '../components/textField/authTime';
import { createTextField as createTextFieldSecretCard } from '../components/textField/secretCard';
import { createTextField as createTextFieldLine } from '../components/textField/line';
import { createTextField as createTextFieldLineLarge } from '../components/textField/lineLarge';
import { createTextField as createTextFieldLineSearch } from '../components/textField/lineSearch';

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

export const 일반범위 = {
    render: () => createTextFieldRange(),
}

export const 혼합 = {
    render: () => createTextFieldEmail(),
}

export const 분리 = {
    render: () => createTextFieldSeparate(),
}

export const 버튼 = {
    render: () => createTextFieldButton(),
}

export const 검색 = {
    render: () => createTextFieldSearch(),
}

export const 계좌번호 = {
    render: () => createTextFieldAccount(),
}

export const 주민등록번호 = {
    render: () => createTextFieldRegistrationNumber(),
}

export const 전화번호 = {
    render: () => createTextFieldPhone(),
}

export const 팩스번호 = {
    render: () => createTextFieldFax(),
}

export const 사업자_등록_번호 = {
    render: () => createTextFieldBusinessNumber(),
}

export const 영문_이름 = {
    render: () => createTextFieldEnglishName(),
}

export const 카드번호 = {
    render: () => createTextFieldCardNumber(),
}

export const Password = {
    render: () => createTextFieldPassword(),
}

export const AuthCode = {
    render: () => createTextFieldAuthCode(),
}

export const AuthPassword = {
    render: () => createTextFieldAuthPassword(),
}

export const AuthTime = {
    render: () => createTextFieldAuthTime(),
}

export const SecretCard = {
    render: () => createTextFieldSecretCard(),
}

export const 라인 = {
    render: () => createTextFieldLine(),
}

export const 라인_큰글씨 = {
    render: () => createTextFieldLineLarge(),
}

export const 라인_검색 = {
    render: () => createTextFieldLineSearch(),
}