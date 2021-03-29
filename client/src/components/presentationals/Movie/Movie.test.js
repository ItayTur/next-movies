import Movie from './Movie';
import classes from './Movie.module.css';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Movie />', () => {

    let wrapper;

    beforeAll(() => wrapper = shallow(<Movie />));

    it('Should render an image', () => {
        expect(wrapper.contains(<img className={classes.Image} />)).toEqual(true);
    });
});