import Rating from './Rating';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Rating />', () => {

    it('Allows to set rating', () => {
        const rating = 5;
        const wrapper = mount(<Rating rating={rating} />);
        expect(wrapper.props().rating).toEqual(rating);
    });
});