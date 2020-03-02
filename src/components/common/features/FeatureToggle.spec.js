import React from 'react';
import PropTypes from 'prop-types';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import FeatureToggle from './FeatureToggle';

configure({ adapter: new Adapter() });

const store = {
  getState: jest.fn(() => ({})),
  dispatch: jest.fn(),
  subscribe: jest.fn()
};

const mockedFlags = {
  isLDReady: true,
  trueFlag: true,
  falseFlag: false
};

jest.mock('selectors', () => ({
  getFeatureFlags: jest.fn(() => mockedFlags),
}));

const TruthyComponent = () => <div>true</div>;
const FalseyComponent = () => <div>false</div>;
const EchoComponent = ({ echo }) => <div>{echo}</div>;

EchoComponent.propTypes = {
  echo: PropTypes.string.isRequired
};

describe('feature toggles', () => {
  beforeEach(() => {
    mockedFlags.isLDReady = true;
  });

  it('no components render when ready is false', () => {
    const props = {
      flag: 'foo',
      OnTrueComponent: TruthyComponent,
      OnFalseComponent: FalseyComponent
    };
    mockedFlags.isLDReady = false;
    const wrapper = shallow(<FeatureToggle store={store} {...props} />).dive();
    expect(wrapper).toEqual({});
  });

  it('no components returns null', () => {
    const props = {
      flag: 'foo',
      OnTrueComponent: TruthyComponent
    };
    const wrapper = shallow(<FeatureToggle store={store} {...props} />).dive();
    expect(wrapper).toEqual({});
  });

  it('flag evaluates to false and no onFalse component returns null', () => {
    const props = {
      flag: 'falseFlag',
      OnTrueComponent: TruthyComponent
    };
    const wrapper = shallow(<FeatureToggle store={store} {...props} />).dive();
    expect(wrapper).toEqual({});
  });

  it('true flag renders onTrue component', () => {
    const props = {
      flag: 'trueFlag',
      OnTrueComponent: TruthyComponent
    };
    const wrapper = shallow(<FeatureToggle store={store} {...props} />).dive();
    const renderedComponent = wrapper.dive();
    expect(renderedComponent.text()).toBe('true');
  });

  it('false flag renders onFalse component', () => {
    const props = {
      flag: 'falseFlag',
      OnTrueComponent: TruthyComponent,
      OnFalseComponent: FalseyComponent
    };
    const wrapper = shallow(<FeatureToggle store={store} {...props} />).dive();
    const renderedComponent = wrapper.dive();
    expect(renderedComponent.text()).toBe('false');
  });

  it('unknown flag renders onFalse component', () => {
    const props = {
      ready: true,
      flag: 'something not in the list of flags',
      OnTrueComponent: TruthyComponent,
      OnFalseComponent: FalseyComponent
    };
    const wrapper = shallow(<FeatureToggle store={store} {...props} />).dive();
    const renderedComponent = wrapper.dive();
    expect(renderedComponent.text()).toBe('false');
  });

  it('props are passed through to the conditional component', () => {
    const props = {
      ready: true,
      flag: 'trueFlag',
      OnTrueComponent: EchoComponent,
      OnFalseComponent: FalseyComponent,
      echo: 'batty'
    };
    const wrapper = shallow(<FeatureToggle store={store} {...props} />).dive();
    const renderedComponent = wrapper.dive();
    expect(renderedComponent.text()).toBe('batty');

    const props2 = {
      ready: true,
      flag: 'falseFlag',
      OnTrueComponent: TruthyComponent,
      OnFalseComponent: EchoComponent,
      echo: 'batty'
    };
    const wrapper2 = shallow(<FeatureToggle store={store} {...props2} />).dive();
    const renderedComponent2 = wrapper2.dive();
    expect(renderedComponent2.text()).toBe('batty');
  });
});
