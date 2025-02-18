import { createAccordion as createAccordionContents } from '../components/accordion/contents';
import { createAccordion as createAccordionList } from '../components/accordion/lists';

export default {
    title: 'Components/Accordion',
    tags: ['autodocs'],
};

export const 콘텐츠형 = {
    render: () => createAccordionContents(),
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/11d108ECbmLz7kBY2ryXSz/Zeroheight-(IDS-2.0)?node-id=2833-56437&t=0W0vrq6hhndfKw5D-4',
        },
    },
}

export const 리스트형 = {
    render: () => createAccordionList(),
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/11d108ECbmLz7kBY2ryXSz/Zeroheight-(IDS-2.0)?node-id=2833-56860&t=GudufYg3CtOqhAbu-4',
        },
    },
}