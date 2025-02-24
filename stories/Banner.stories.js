import {createButton as createBannerSmall } from '../components/banner/small';
import {createButton as createBannerMedium } from '../components/banner/medium';

export default {
    title: 'Components/Banner',
    tags: ['autodocs'],
};

export const Small = {
    render: () => createBannerSmall(),
}

export const Medium = {
    render: () => createBannerMedium(),
}