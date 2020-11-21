import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
// import { render, screen } from '@testing-library/react';
import Dashboard from './components/dashboard/Dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard', () => {
  it('when there is no quiz, it should just display: no quiz now', () => {
    const page = shallow(<Dashboard quizzes={[]} />);
    expect(page.find('GameItem').length).toEqual(0);
    expect('no quiz now').toBeInTheDocument();
  });
  it('The GameItem\' number should be the same as quiz number', () => {
    const page = shallow(<Dashboard quizzes={[{ id: '123' }, { id: '567' }]} />);
    expect(page.find('GameItem').length).toEqual(2);
  });
});
