import { createSlider as createSliderDefault } from '../../components/slider/default';
import { createSlider as createSliderLarge } from '../../components/slider/large';
import { createSlider as createSliderBetween } from '../../components/slider/between';
import { createSlider as createSliderBetweenLarge } from '../../components/slider/betweenLarge';

export default {
    title: 'Components/Slider',
    tags: ['autodocs'],
};

export const Default = {
    render: () => createSliderDefault(),
}

export const Large = {
    render: () => createSliderLarge(),
}

export const 범위 = {
    render: () => createSliderBetween(),
}

export const 범위_Large = {
    render: () => createSliderBetweenLarge(),
}