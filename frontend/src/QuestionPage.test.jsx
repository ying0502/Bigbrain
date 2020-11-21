import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen } from '@testing-library/react';
import QuestionPage from './components/dashboard/qustionPage';

configure({ adapter: new Adapter() });

describe('QuestionPage', () => {
  it('QuestionPage Header can be shown correctly', () => {
    render(<QuestionPage />);
    const expectedHeader = screen.getByText(/Question Information Update/i);
    expect(expectedHeader).toBeInTheDocument();
  });
  it('QuestionPage has all the required items', () => {
    render(<QuestionPage />);
    const QuestionType = screen.getByText(/Question Type/);
    const correctAnswer = screen.getByText(/Correct Answer/);
    const QuestionName = screen.getByText(/Question Name/);
    const TimeLimits = screen.getByText(/Time_limits/);
    const points = screen.getByText(/Points/);
    const VideoLink = screen.getByText(/Video Link/);
    expect(QuestionType).toBeInTheDocument();
    expect(correctAnswer).toBeInTheDocument();
    expect(QuestionName).toBeInTheDocument();
    expect(TimeLimits).toBeInTheDocument();
    expect(points).toBeInTheDocument();
    expect(VideoLink).toBeInTheDocument();
  });
  it('correct number of text input', () => {
    const page = shallow(<QuestionPage />);
    expect(page.find('input').length).toEqual(4);
  });
  it('correct number of selector', () => {
    const page = shallow(<QuestionPage />);
    expect(page.find('select').length).toEqual(2);
  });
  it('correct number of textarea', () => {
    const page = shallow(<QuestionPage />);
    expect(page.find('textarea').length).toEqual(4);
  });
  it('select single single choice, then render single select for answers', () => {
    const page = shallow(<QuestionPage />);
    const wrapper = page.find('select').at(0);
    wrapper.find('option').at(1).selected = true;
    wrapper.find('option').at(2).selected = false;
    expect(page.find('select').at(1).props('single'));
  });
  it('select single multiple choice, then render multiple select for answers', () => {
    const page = shallow(<QuestionPage />);
    const wrapper = page.find('select').at(0);
    wrapper.find('option').at(1).selected = false;
    wrapper.find('option').at(2).selected = true;
    expect(page.find('select').at(1).props('multiple'));
  });
  it('Button text right', () => {
    const page = shallow(<QuestionPage />);
    const button = page.find('button');
    expect(button.text()).toBe('Save');
  });
});
