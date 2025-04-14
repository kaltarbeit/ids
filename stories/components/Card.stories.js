import { createCard as createCardBasic } from '../../components/card/basic';
import { createCard as createCardBlur } from '../../components/card/blur';
import { createCard as createCardFilled } from '../../components/card/filled';
import { createCard as createCardOutlined } from '../../components/card/outlined';

export default {
    title: 'Components/Card',
    tags: ['autodocs'],
};

export const Basic = {
    render: () => createCardBasic(),
}

export const Blur = {
    render: () => createCardBlur(),
}

export const Filled = {
    render: () => createCardFilled(),
}

export const Outlined = {
    render: () => createCardOutlined(),
}