import { createTopNavigation as createTopNavigationMain } from '../components/topNavigation/main';
import { createTopNavigation as createTopNavigationSub } from '../components/topNavigation/sub';

export default {
    title: 'Components/TopNavigation',
    tags: ['autodocs'],
};

export const Main = {
    render: () => createTopNavigationMain(),
}

export const Sub = {
    render: () => createTopNavigationSub(),
}