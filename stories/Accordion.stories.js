import { createAccordion } from '../components/accordion/contents';

export default {
    title: 'Components/Accordion',
    tags: ['autodocs'],
};

export const 콘텐츠형 = {
    render: () => createAccordion(),
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/6RHyolyGvqHVUrE0iKabvp/Components-Library-(IDS-2.0)?node-id=4452-10777&t=jJQxd6asQt9jArO8-4',
        },
    },
}

export const 리스트형 = {
    render: () => createAccordion(),
}