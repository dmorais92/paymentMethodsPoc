import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { paymentMethodsActions } from '../Store/actions';
import { ReactComponent as SyncIcon } from './Icons/SyncIcon.svg';
import api from '../api';
import StyledComponents from './Components.styled';
// ! Below is imported in case Github Gists API returns 403()
// import mockData from '../dev.json';
import unNest from '../Utils/unNest';
import PaymentMethodItem from './PaymentMethodItem';

const { Page, List, Layout, Button, Loader } = StyledComponents;

//========================================================================================
/*                                                                                      *
 *                                  Payments component                                  *
 *                                                                                      */
//========================================================================================

export const Payments = props => {
	const {
		isFetchingPayments,
		paymentMethods,
		error,
		getPaymentMethods,
		updatePaymentMethod,
		deletePaymentMethod
	} = props;

	useEffect(() => {
		if (!isFetchingPayments && !error && !paymentMethods.length) {
			getPaymentMethods();
		}
	});
	return (
		<Page>
			<Layout>
				<h1>
					Payment Methods
					<Button
						className={(isFetchingPayments && 'syncing') || ''}
						onClick={() => getPaymentMethods()}
					>
						<SyncIcon />
					</Button>
				</h1>
				<h2>Click to expand and view payment method details</h2>
				{isFetchingPayments ? (
					<Loader>
						<SyncIcon />
					</Loader>
				) : (
					<List>
						{paymentMethods.map((pm, i) => {
							return (
								<PaymentMethodItem
									key={pm.id}
									{...pm}
									onChange={updatePaymentMethod}
									onDelete={deletePaymentMethod}
								/>
							);
						})}
					</List>
				)}
			</Layout>
		</Page>
	);
};

Payments.propTypes = {
	isFetchingPayments: PropTypes.bool,
	error: PropTypes.string,
	getPaymentMethods: PropTypes.func,
	deletePaymentMethod: PropTypes.func,
	updatePaymentMethod: PropTypes.func,
	paymentMethods: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string,
			amount: PropTypes.string,
			beneficiary: PropTypes.object,
			charges: PropTypes.shape({
				sender: PropTypes.object,
				receiver: PropTypes.object
			}),
			debtor: PropTypes.object,
			paymentType: PropTypes.string,
			date: PropTypes.string,
			reference: PropTypes.string
		})
	)
};

Payments.defaultProps = {
	paymentMethods: [],
	error: '',
	isFetchingPayments: false,
	getPaymentMethods: () => console.log('getPaymentMethods'),
	deletePaymentMethod: () => console.log('deletePaymentMethod'),
	updatePaymentMethod: () => console.log('updatePaymentMethod')
};

//──── Container ─────────────────────────────────────────────────────────────────────────

const {
	getPaymentMethods,
	getPaymentMethodsSuccess,
	getPaymentMethodsFailed,
	updatePaymentMethod,
	deletePaymentMethod
} = paymentMethodsActions;

const mapStateToProps = state => ({
	isFetchingPayments: state.payments.isFetchingPayments,
	error: state.payments.error,
	paymentMethods: state.payments.paymentMethodsData
});

const GITHUB_GIST_ID = '3465445ccd2031f19bf5fc5a15035c5b';
const GITHUB_GIST_FILENAME = 'paymentMethods.json';
export const mapDispatchToProps = dispatch => ({
	updatePaymentMethod: (value, prop, id) => {
		dispatch(updatePaymentMethod(value[prop], prop, id));
	},
	deletePaymentMethod: id => {
		dispatch(deletePaymentMethod(id));
	},
	getPaymentMethods: async () => {
		dispatch(getPaymentMethods());
		try {
			const apiData = await api.get(`/${GITHUB_GIST_ID}`);
			if (apiData && unNest(apiData, 'data.files')[GITHUB_GIST_FILENAME]) {
				const paymentMethodsData =
					JSON.parse(
						unNest(apiData, 'data.files')[GITHUB_GIST_FILENAME].content
					).data || [];
				dispatch(getPaymentMethodsSuccess(paymentMethodsData));
			}
		} catch {
			dispatch(getPaymentMethodsFailed());
			// ! Used if Github Gist API starts returning 403 (Forbidden due to API limits)
			// dispatch(getPaymentMethodsSuccess(mockData.data));
		}
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Payments);
