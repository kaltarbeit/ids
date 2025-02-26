import { createLabel as createLabelInfo } from '../components/label/info';
import { createLabel as createLabelRisk } from '../components/label/risk';
import { createLabel as createLabelActivity } from '../components/label/activity';
import { createLabel as createLabelAD } from '../components/label/ad';

export default {
    title: 'Components/Label',
    tags: ['autodocs'],
};

export const Information = {
    render: () => createLabelInfo(),
}

export const Risk = {
    render: () => createLabelRisk(),
}

export const Activity = {
    render: () => createLabelActivity(),
}

export const AD = {
    render: () => createLabelAD(),
}