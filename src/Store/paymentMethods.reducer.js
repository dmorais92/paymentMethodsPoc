import { ACTION_TYPES } from './actions';
import getPropsFromRawData from '../Utils/getPropsFromRawData';

const MAP_PATH_TO_PROP = {
	type: 'type',
	amount: 'attributes.amount',
	benificiary: 'attributes.beneficiary_party',
	charges: 'attributes.charges_information',
	debtor: 'attributes.debtor_party',
	purpose: 'attributes.payment_purpose',
	paymentType: 'attributes.payment_type',
	currency: 'attributes.currency',
	date: 'attributes.processing_date',
	reference: 'attributes.reference'
};

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
			paymentMethodsData: action.payload.paymentMethods.map(pm =>
				getPropsFromRawData(pm, MAP_PATH_TO_PROP)
			)
		};
	case ACTION_TYPES.PAYMENT_METHODS.GET_PM_FAILED:
		return {
			...state,
			isFetchingPayments: false,
			error: action.payload.error,
			paymentMethodsData: []
		};
	default:
		return state;
	}
}
