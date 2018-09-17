import React from 'react';
import ReactDOM from 'react-dom';
import Order from './Order';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Order tests', () => {

    it('renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Order/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('has text Order', () => {
        const wrapper = shallow(<Order/>);
        expect(wrapper.text()).toBe('Zamowienie');
    })

});
