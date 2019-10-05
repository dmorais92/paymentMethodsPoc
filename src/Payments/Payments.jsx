import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import { paymentMethodsActions } from '../Store/actions';
import api from '../api';
import StyledComponents from '../Components.styled';

const {
	Page,
	AppBar,
	List,
	ListItem,
	Layout,
	ListItemTitleSubtitle,
	ListItemTitle,
	ListItemSubtitle
} = StyledComponents;

//========================================================================================
/*                                                                                      *
 *                                  Payments component                                  *
 *                                                                                      */
//========================================================================================

const Payments = props => {
	const { className, paymentMethods, getPaymentMethods } = props;

	useEffect(() => {
		getPaymentMethods();
	});
	return (
		<Page classNamer={className}>
			<AppBar>
				<span>Payments</span>
				<div>
					<span>
						Made with React by <img src={logo} />
					</span>
					<span>
						<a href="https://github.com/dmorais92/">David Morais</a>
					</span>
				</div>
			</AppBar>
			<Layout>
				<h1>Payment Methods</h1>
				<h2>Click to expand and view payment method details</h2>
				<List>
					<ListItem>
						<ListItemTitleSubtitle>
							<ListItemTitle>Example</ListItemTitle>
							<ListItemSubtitle>2031-32-44</ListItemSubtitle>
						</ListItemTitleSubtitle>
					</ListItem>
				</List>
			</Layout>
		</Page>
	);
};

Payments.propTypes = {
	paymentMethods: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.string,
			ammount: PropTypes.number,
			beneficiary: PropTypes.object,
			charges: {
				sender: PropTypes.object,
				receiver: PropTypes.object
			},
			debtor: PropTypes.object,
			paymentType: PropTypes.string,
			date: PropTypes.string,
			reference: PropTypes.string
		})
	)
};

Payments.defaultProps = {
	paymentMethods: []
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
	paymentMethods: state.payments.paymentMethodsData
});

const GITHUB_GIST_ID = '3465445ccd2031f19bf5fc5a15035c5b';
const GITHUB_GIST_FILENAME = 'paymentMethods.json';
const mapDispatchToProps = dispatch => ({
	getPaymentMethods: async () => {
		dispatch(getPaymentMethods());
		try {
			const apiData = await api.get(`/${GITHUB_GIST_ID}`);
			if (apiData && apiData?.data?.files[GITHUB_GIST_FILENAME]) {
				const paymentMethodsData = JSON.parse(
					apiData.data.files[GITHUB_GIST_FILENAME]
				);
				dispatch(getPaymentMethodsSuccess(apiData.data));
			}
		} catch {
			dispatch(getPaymentMethodsFailed());
		}
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Payments);
