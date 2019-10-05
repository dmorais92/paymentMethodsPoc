export const ACTION_TYPES = {
	PAYMENT_METHODS: {
		GET_PM_FROM_API: 'GET_PM_FROM_API',
		GET_PM_FAILED: 'GET_PM_FAILED',
		GET_PM_SUCCESS: 'GET_PM_SUCCESS',
		UPDATE_PM: 'UPDATE_PM',
		DELETE_PM: 'DELETE_PM'
	}
};

export const getPaymentMethods = () => ({
	type: ACTION_TYPES.PAYMENT_METHODS.GET_PM_FROM_API
});

export const getPaymentMethodsSUccess = () => ({
	type: ACTION_TYPES.PAYMENT_METHODS.GET_PM_FAILED,
	payload: {
		error: 'Failed getting methods from API'
	}
});

export const getPaymentMethodsFailed = e => ({
	type: ACTION_TYPES.PAYMENT_METHODS.GET_PM_SUCCESS,
	payload: {
		error: false
	}
});

export const updatePaymentMethod = updatedPaymentMethod => ({
	type: ACTION_TYPES.PAYMENT_METHODS.UPDATE_PM,
	payload: {
		updatedPaymentMethod
	}
});

export const deletePaymentMethod = deletedPaymentMethod => ({
	type: ACTION_TYPES.PAYMENT_METHODS.DELETE_PM,
	payload: {
		deletedPaymentMethod
	}
});
