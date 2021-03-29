import Movies from './Movies';
import Movie from '../Movie/Movie';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

const getMovies = () => {
    const movies = [];
    for (let i = 0; i < 100; i++) {
        movies.push({ id: i, title: 'test movie' })
    }
    return movies;
}

Enzyme.configure({ adapter: new Adapter() });

describe('<Movies />', () => {
    let wrapper;
    const movies = getMovies();
    beforeAll(() => wrapper = shallow(<Movies movies={movies} />));

    it('should render <Movie />', () => {
        expect(wrapper.containsMatchingElement(<Movie />)).toEqual(true);
    })
})