export const ACTION_TYPES = {
  PAYMENT_METHODS: {
    GET_PM_FROM_API: 'GET_PM_FROM_API',
    GET_PM_FAILED: 'GET_PM_FAILED',
    GET_PM_SUCCESS: 'GET_PM_SUCCESS',
    UPDATE_PM: 'UPDATE_PM',
    DELETE_PM: 'DELETE_PM',
  },
};

export const getPaymentMethods = () => ({
  type: ACTION_TYPES.PAYMENT_METHODS.GET_PM_FROM_API,
});

export const getPaymentMethodsFailed = () => ({
  type: ACTION_TYPES.PAYMENT_METHODS.GET_PM_FAILED,
  payload: {
    error: 'Failed getting payment methods from API',
  },
});

export const getPaymentMethodsSuccess = (paymentMethods) => ({
  type: ACTION_TYPES.PAYMENT_METHODS.GET_PM_SUCCESS,
  payload: {
    paymentMethods,
    error: false,
  },
});

export const updatePaymentMethod = (value, prop, id) => ({
  type: ACTION_TYPES.PAYMENT_METHODS.UPDATE_PM,
  payload: {
    newValue: value,
    viewProp: prop,
    updatedPaymentMethodId: id,
  },
});

export const deletePaymentMethod = (id) => ({
  type: ACTION_TYPES.PAYMENT_METHODS.DELETE_PM,
  payload: {
    deletedPaymentMethodId: id,
  },
});

export const paymentMethodsActions = {
  getPaymentMethods,
  getPaymentMethodsSuccess,
  getPaymentMethodsFailed,
  updatePaymentMethod,
  deletePaymentMethod,
};
