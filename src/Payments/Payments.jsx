import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const Payments = props => {
	const { className } = props;
	return (
		<Page classNamer={className}>
			<AppBar>Payments</AppBar>
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

const mapStateToProps = state => ({
	paymentMethods: state.payments.paymentMethodsData
});

const mapDispatchToProps = dispatch => ({
	// fnBlaBla: () => dispatch(action.name()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Payments);
