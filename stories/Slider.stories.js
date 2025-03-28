import { createSlider as createSliderDefault } from '../components/slider/default';
import { createSlider as createSliderLarge } from '../components/slider/large';

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