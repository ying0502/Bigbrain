import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { render, screen } from '@testing-library/react';
import { GameItem } from './components/dashboard/gameItem';

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
    expect(page.find('.row').length).toEqual(1);
    expect(page.find('.card-content').length).toEqual(1);
    expect(page.find('.card-title').length).toEqual(1);
    expect(page.find('.card-action').length).toEqual(1);
    expect(page.find('.right').length).toEqual(2);
  });
  it('Game Name can be shown exactly', () => {
    const page = shallow(<GameItem item={{
      active: '283284',
      createdAt: '2020-11-12T15:03:33.092Z',
      id: '862040729',
      name: 'Pokemon Exploration',
    }}
    />);
    const name = page.find('.card-title');
    expect(name.text()).toBe('Pokemon Exploration');
  });
  it('Game Id should be displayed correctly', () => {
    const page = shallow(<GameItem item={{
      active: '283284',
      createdAt: '2020-11-12T15:03:33.092Z',
      id: '862040729',
      name: 'Pokemon Exploration',
    }}
    />);
    const IdPlace = page.find('.right').at(0);
    expect(IdPlace.text()).toBe('id:862040729');
  });
  it('A link to join a session when the game is active but there is none when the game isn\'t', () => {
    const page = shallow(<GameItem item={{
      active: '283284',
      createdAt: '2020-11-12T15:03:33.092Z',
      id: '862040729',
      name: 'Pokemon Exploration',
    }}
    />);
    const page1 = shallow(<GameItem item={{
      active: null,
      createdAt: '2020-11-12T15:03:33.092Z',
      id: '862040729',
      name: 'Pokemon Exploration',
    }}
    />);
    const LinkPlace = page.find('a').at(0);
    const LinkPlace1 = page1.find('a').at(0);
    expect(LinkPlace.text()).toBe('Go to Play the game!');
    expect(LinkPlace1.text()).toBe('');
  });
  it('correct number of button when the game is active', () => {
    const page = shallow(<GameItem item={{
      active: '283284',
      createdAt: '2020-11-12T15:03:33.092Z',
      id: '862040729',
      name: 'Pokemon Exploration',
    }}
    />);
    expect(page.find('button').length).toEqual(3);
  });
  it('correct number of button when the game is not active', () => {
    const page = shallow(<GameItem item={{
      active: null,
      createdAt: '2020-11-12T15:03:33.092Z',
      id: '862040729',
      name: 'Pokemon Exploration',
    }}
    />);
    expect(page.find('button').length).toEqual(2);
  });
  it('All buttons\' text are correct when the game is active', () => {
    const page = shallow(<GameItem item={{
      active: '283284',
      createdAt: '2020-11-12T15:03:33.092Z',
      id: '862040729',
      name: 'Pokemon Exploration',
    }}
    />);
    expect(page.find('button').length).toEqual(3);
    const buttonAdvance = page.find('button').at(0);
    const buttonSession = page.find('button').at(1);
    const buttonEdit = page.find('button').at(2);
    expect(buttonAdvance.text()).toBe('advance');
    expect(buttonSession.text()).toBe('close the game');
    expect(buttonEdit.text()).toBe('edit');
  });
  it('All buttons\' text are correct when the game is not active', () => {
    const page = shallow(<GameItem item={{
      active: null,
      createdAt: '2020-11-12T15:03:33.092Z',
      id: '862040729',
      name: 'Pokemon Exploration',
    }}
    />);
    const buttonSession = page.find('button').at(0);
    const buttonEdit = page.find('button').at(1);
    expect(buttonSession.text()).toBe('start the game');
    expect(buttonEdit.text()).toBe('edit');
  });
  it('The thumbnail have an alt tag \'game_thumbnail\' in GameCard', () => {
    const page = shallow(<GameItem item={{
      active: null,
      createdAt: '2020-11-12T15:03:33.092Z',
      id: '862040729',
      name: 'Pokemon Exploration',
    }}
    />);
    const CardImg = page.find({ alt: 'game_thumbnail' });
    expect(CardImg.length).toEqual(1);
  });
});
