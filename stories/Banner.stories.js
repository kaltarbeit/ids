import {createButton as createBannerSmall } from '../components/banner/small';
import {createButton as createBannerMedium } from '../components/banner/medium';
import {createButton as createBannerLarge } from '../components/banner/large';
import {createButton as createBannerNotice } from '../components/banner/notice';

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

export const Large = {
    render: () => createBannerLarge(),
}

export const Notice = {
    render: () => createBannerNotice(),
}