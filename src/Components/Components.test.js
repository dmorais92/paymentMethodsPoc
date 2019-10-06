import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StyledComponents from './Components.styled';

const {
  Page, AppBar, List, ListItem, Layout, Button,
} = StyledComponents;

describe('Page component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches snapshot', () => {
    const component = renderer.create(<Page />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('AppBar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches snapshot', () => {
    const component = renderer.create(<AppBar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches snapshot', () => {
    const component = renderer.create(<List />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('ListItem component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches snapshot', () => {
    const component = renderer.create(<ListItem />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Layout component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches snapshot', () => {
    const component = renderer.create(<Layout />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders multiple children', () => {
    const component = renderer.create(
      <Button>
        <h1>Testing with multiple children</h1>
A short paragraph
      </Button>,
    );
    expect(component.root.findByType('h1').props.children).toBe('Testing with multiple children');
  });

  it('matches snapshot', () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
