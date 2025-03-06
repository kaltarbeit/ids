import { createAccordion as createAccordionContents } from '../components/accordion/contents';
import { createAccordion as createAccordionList } from '../components/accordion/lists';
import { createAccordion as createAccordionMix } from '../components/accordion/mix';
import { createAccordion as createAccordionHelp } from '../components/accordion/help';

export default {
    title: 'Components/Accordion',
    tags: ['autodocs'],
};

export const 콘텐츠형 = {
    render: () => createAccordionContents(),
}

export const 리스트형 = {
    render: () => createAccordionList(),
}

export const 조합형 = {
    render: () => createAccordionMix(),
}

export const 도움말형 = {
    render: () => createAccordionHelp(),
}