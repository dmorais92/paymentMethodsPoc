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
			isFetchingUsers: true
		};
	case ACTION_TYPES.PAYMENT_METHODS.GET_PM_SUCCESS:
		return {
			...state,
			isFetchingUsers: false,
			userList: action.users
		};
	case ACTION_TYPES.PAYMENT_METHODS.GET_PM_FAILED:
		return {
			...state,
			isFetchingUsers: false,
			error: action.error
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
