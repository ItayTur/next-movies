import Button from './Button';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {

    it('simulates click events', () => {
        const onButtonClick = sinon.spy();
        const wrapper = shallow(<Button onClick={onButtonClick} />);
        wrapper.find('button').simulate('click');
        expect(onButtonClick).toHaveProperty('callCount', 1);
    });
});