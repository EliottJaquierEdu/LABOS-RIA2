import { mount } from '@vue/test-utils';
import DataBinding from '@/components/DataBinding.vue';

describe('DataBinding.vue', () => {
    test('renders name binding correctly', () => {
        const wrapper = mount(DataBinding);
        const nameText = wrapper.find('#name-container p').text();
        expect(nameText).toBe('John Doe');
    });

    test('renders items list correctly using v-for', () => {
        const wrapper = mount(DataBinding);
        const items = wrapper.findAll('li');
        expect(items.length).toBe(4);
        expect(items[0].text()).toBe('Item 1');
        expect(items[1].text()).toBe('Item 2');
        expect(items[2].text()).toBe('Item 3');
        expect(items[3].text()).toBe('Item 4');
    });
});