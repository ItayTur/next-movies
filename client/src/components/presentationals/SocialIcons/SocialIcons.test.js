import SocialIcons from './SocialIcons';
import Icon from '../UI/Icon/Icon';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<SocialIcons />', () => {

    let wrapper;
    beforeAll(() => wrapper = shallow(<SocialIcons />));

    it('Should have 5 <Icon />', () => {
        expect(wrapper.find(Icon)).toHaveLength(5);
    });
});