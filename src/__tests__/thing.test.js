import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing our Counter component', () => {

    it('exists at the start of the app', () => {
        let app = shallow(<Counter />);
        expect(app.find('h3').exists()).toBeTruthy();
    })

    it('Counter renders', () => {
        let app = mount(<Counter />);
        let button = app.find('button');
        expect(button).toBeDefined();
        expect(app.state('counter')).toBe(0);
    });

    it('render correctly to the DOM', () => {
        const renderTree = renderer.create(<Counter />).toJSON();
        expect(renderTree).toMatchSnapshot();
    });

    it('Increase Counter value by one on Click', () => {
     
        let app = mount(<Counter />);
        let button = app.find('#one');      
        button.simulate('click');
        expect(app.state('counter')).toBe(1);
    });

    it('Decrease Counter value by one on Click', () => {
     
        let app = mount(<Counter />);
        let button = app.find('#two');      
        button.simulate('click');
        expect(app.state('counter')).toBe(-1);
    });
});


