import { createPopup as createPopupLayer  } from '../components/popup/layer';
import { createPopup as createPopupPromotion  } from '../components/popup/promotion';
import { createPopup as createPopupFull  } from '../components/popup/full';

export default {
    title: 'Components/Popup',
    tags: ['autodocs'],
};

export const LayerPopup = {
    render: () => createPopupLayer(),
}

export const Promotion = {
    render: () => createPopupPromotion(),
}

export const Full = {
    render: () => createPopupFull(),
}