import Modal from './Modal';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Modal />', () => {

    it('Renders children when passed in', () => {
        const wrapper = shallow((
        <Modal>
            <div className="children"/>
        </Modal>
        ));
        expect(wrapper.contains(<div className="children"/>)).toEqual(true);
    });
});