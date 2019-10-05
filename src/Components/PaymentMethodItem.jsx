import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledComponents from './Components.styled';
import { ReactComponent as DownIcon } from './Icons/DownIcon.svg';

const {
	Button,
	ListItem,
	ListItemSubtitle,
	ListItemTitleSubtitle,
	ListItemTitle
} = StyledComponents;
//import { Test } from './PaymentMethodItem.styles';

const PaymentMethodItem = props => {
	const [expanded, toggleExpanded] = useState(false);
	const ExpandedSection = styled.div`
		margin: 12px;
		height: auto;
		width: 100%;
		opacity: 1;
		max-height: 250px;
		overflow-y: auto;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	`;
	return (
		<ListItem>
			<ListItemTitleSubtitle>
				<ListItemTitle>{props.amount}</ListItemTitle>
				<ListItemSubtitle>{props.currency}</ListItemSubtitle>
			</ListItemTitleSubtitle>
			<ListItemTitleSubtitle>
				<ListItemTitle>{props.reference}</ListItemTitle>
				<ListItemSubtitle>{props.date}</ListItemSubtitle>
			</ListItemTitleSubtitle>
			<Button onClick={() => toggleExpanded(!expanded)}>
				<DownIcon className={(expanded && 'inverted') || ''} />
			</Button>
			{expanded && (
				<ExpandedSection>
					<ListItemTitleSubtitle>
						<ListItemTitle>Purpose</ListItemTitle>
						<ListItemSubtitle>{props.purpose}</ListItemSubtitle>
					</ListItemTitleSubtitle>
					<ListItemTitleSubtitle>
						<ListItemTitle>Payment Type</ListItemTitle>
						<ListItemSubtitle>{props.paymentType}</ListItemSubtitle>
					</ListItemTitleSubtitle>
					<ListItemTitleSubtitle>
						<ListItemTitle>From:</ListItemTitle>
						<ListItemSubtitle>{props.debtor.account_name}</ListItemSubtitle>
						<ListItemTitle>To:</ListItemTitle>
						<ListItemSubtitle>
							{props.benificiary.account_name}
						</ListItemSubtitle>
					</ListItemTitleSubtitle>
					<ListItemTitleSubtitle>
						<ListItemTitle>Charges</ListItemTitle>
						<ListItemSubtitle>
							{props.charges.receiver_charges_amount}{' '}
							{props.charges.receiver_charges_currency}
						</ListItemSubtitle>
					</ListItemTitleSubtitle>
				</ExpandedSection>
			)}
		</ListItem>
	);
};

PaymentMethodItem.propTypes = {
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
};

PaymentMethodItem.defaultProps = {
	// bla: 'test',
};

export default PaymentMethodItem;
