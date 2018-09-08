import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Header tests', () => {

    it('renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('has text Header', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('h1').text()).toBe('Header');
    })

})
