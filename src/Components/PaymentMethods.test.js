import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import PaymentMethodsContainer, { Payments as PaymentMethodsComponent } from './PaymentMethods';
import MOCK_DATA from '../dev.json';
import PaymentsReducer from '../Store/payments.reducer';
import { paymentMethodsActions } from '../Store/actions';

const configureMockStore = configureStore();
const { getPaymentMethodsSuccess } = paymentMethodsActions;

const INITIAL_STATE = {
  payments: {
    paymentMethodsData: [],
    isFetchingPayments: false,
    error: '',
  },
};
const UPDATED_STATE = PaymentsReducer(
  INITIAL_STATE.payments,
  getPaymentMethodsSuccess(MOCK_DATA.data),
);

const store = configureMockStore(INITIAL_STATE);
const updatedStore = configureMockStore({
  payments: UPDATED_STATE,
});

describe('PaymentMethods container', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PaymentMethodsContainer store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('matches snapshot', () => {
    const component = renderer.create(<PaymentMethodsContainer store={store} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should have the same amount of props and store payment methods', () => {
    const component = renderer.create(<PaymentMethodsContainer store={updatedStore} />);
    const componentInstance = component.root;
    expect(componentInstance.props.store.getState().payments.paymentMethodsData.length).toBe(14);
  });
});

describe('Payments component', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<PaymentMethodsComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('has same number of children as paymentMethods', () => {
    const component = renderer.create(
      <PaymentMethodsComponent paymentMethods={UPDATED_STATE.paymentMethodsData} />,
    );
    const testInstance = component.root;
    expect(testInstance.findAll((el) => el.type.target === 'li').length).toBe(14);
  });
});
