import Home from './Home';
import Movies from '../../presentationals/Movies/Movies';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {

    let wrapper;
    beforeAll(() => wrapper = shallow(<Home />));

    it('shold have 1 <Movies />', () => {
        expect(wrapper.find(Movies)).toHaveLength(1);
    })
})