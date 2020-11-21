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
  it('correct number of text input', () => {
    const page = shallow(<QuestionPage />);
    expect(page.find('input').length).toEqual(5);
  });
  it('correct number of selector', () => {
    const page = shallow(<QuestionPage />);
    expect(page.find('select').length).toEqual(2);
  });
  it('correct number of textarea', () => {
    const page = shallow(<QuestionPage />);
    expect(page.find('textarea').length).toEqual(4);
  });
});
