import { ACTION_TYPES } from './actions';

export default function users(
	state = {
		paymentMethodsData: [],
		isFetchingPayments: false,
		error: ''
	},
	action
) {
	switch (action.type) {
	case ACTION_TYPES.PAYMENT_METHODS.GET_PM_FROM_API:
		return {
			...state,
			isFetchingPayments: true
		};
	case ACTION_TYPES.PAYMENT_METHODS.GET_PM_SUCCESS:
		return {
			...state,
			isFetchingPayments: false,
			paymentMethodsData: action.users
		};
	case ACTION_TYPES.PAYMENT_METHODS.GET_PM_FAILED:
		return {
			...state,
			isFetchingPayments: false,
			error: action.error,
			paymentMethodsData: []
		};
		/*
      case ACTION_TYPES.PAYMENT_METHODS.UPDATE_PM:
        return {
          ...state,
        };
      case ACTION_TYPES.PAYMENT_METHODS.DELETE_PM:
        return {
          ...state,
        };
        */
	default:
		return state;
	}
}
