// import { shallow } from 'enzyme';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { render, screen } from '@testing-library/react';
import GameItem from './components/dashboard/gameItem';

configure({ adapter: new Adapter() });

describe('GameCard', () => {
  it('Right GameCard Structure', () => {
    const page = shallow(<GameItem item={{
      active: '283284',
      createdAt: '2020-11-12T15:03:33.092Z',
      id: '862040729',
      name: 'Pokemon Exploration',
    }}
    />);
    expect(page.find('.card').length).toEqual(1);
    expect(page.find('.card-image').length).toEqual(1);
    expect(page.find('.card-content').length).toEqual(1);
    expect(page.find('.card-title').length).toEqual(1);
    expect(page.find('.card-action').length).toEqual(1);
  });
  // it('The thumbnail have an alt tag \'game_thumbnail\' in GameCard', () => {
  //   render(<GameItem item={{
  //     active: '283284',
  //     createdAt: '2020-11-12T15:03:33.092Z',
  //     id: '862040729',
  //     name: 'Pokemon Exploration',
  //   }}
  //   />);
  //   const CardImg = screen.getByAltText(/game_thumbnail/i);
  //   expect(CardImg).toBeInTheDocument();
  // });
});
