import PaymentsReducer from './payments.reducer';
import { paymentMethodsActions } from './actions';
import MOCK_DATA from '../dev.json';

const {
  getPaymentMethods,
  getPaymentMethodsSuccess,
  getPaymentMethodsFailed,
  updatePaymentMethod,
  deletePaymentMethod,
} = paymentMethodsActions;

const INITIAL_STATE = {
  paymentMethodsData: [],
  isFetchingPayments: false,
  error: '',
};

describe('Payments Reducer', () => {
  it('should return the initial state', () => {
    expect(PaymentsReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should return a loading state when fetching payment methods', () => {
    expect(PaymentsReducer(undefined, getPaymentMethods())).toEqual({
      ...INITIAL_STATE,
      isFetchingPayments: true,
    });
  });

  it('should show an error when failing to get data', () => {
    const postActionState = PaymentsReducer(undefined, getPaymentMethodsFailed());
    expect(postActionState.error).toBe('Failed getting payment methods from API');
  });

  it('should update payment methods list', () => {
    const postActionState = PaymentsReducer(
      INITIAL_STATE,
      getPaymentMethodsSuccess(MOCK_DATA.data),
    );
    expect(postActionState.paymentMethodsData.length).toEqual(14);
  });
  it('should update a single payment method\'s reference', () => {
    const testInitialState = {
      ...INITIAL_STATE,
      paymentMethodsData: MOCK_DATA.data.map((paymentMethod, index) => ({
        ...paymentMethod,
        id: index,
      })),
    };
    const testReference = 'New reference';
    const postActionState = PaymentsReducer(
      testInitialState,
      updatePaymentMethod(testReference, 'reference', 0),
    );
    expect(postActionState.paymentMethodsData[0].reference).toBe(testReference);
  });
  it('should delete a payment method\'s reference', () => {
    const testInitialState = {
      ...INITIAL_STATE,
      paymentMethodsData: MOCK_DATA.data.map((paymentMethod, index) => ({
        ...paymentMethod,
        id: index,
      })),
    };
    const postActionState = PaymentsReducer(testInitialState, deletePaymentMethod(5));
    expect(postActionState.paymentMethodsData.length).toBe(13);
  });
});
