import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App tests', () => {

    it('renders without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('has text Hello World', () => {
        const wrapper = shallow(<App/>);
        //console.log(wrapper.debug());
        expect(wrapper.find('i').text()).toBe('Hello World');
    })

})
