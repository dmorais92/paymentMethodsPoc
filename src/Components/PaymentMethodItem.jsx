import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledComponents from './Components.styled';
import { ReactComponent as DownIcon } from './Icons/DownIcon.svg';
import { ReactComponent as DeleteIcon } from './Icons/DeleteIcon.svg';
import InlineEditInput from './InlineEditInput';

const {
	Button,
	ListItem,
	ListItemSubtitle,
	ListItemTitleSubtitle,
	ListItemTitle
} = StyledComponents;

const StyledDeleteIcon = styled(DeleteIcon)`
	&& {
		height: 24px;
		width: 24px;
		border-radius: 50px;
		border: 2px solid #ddd;
		position: relative;
		bottom: 12px;

		> :nth-child(2) {
			fill: #f44336;
		}
		&:hover {
			> :nth-child(2) {
				fill: #c62828;
			}
		}
	}
`;

const PaymentMethodItem = props => {
	const [expanded, toggleExpanded] = useState(false);
	const ExpandedSection = styled.div`
		margin: 6px;
		height: auto;
		width: 100%;
		opacity: 1;
		max-height: 250px;
		overflow-y: auto;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		div {
			margin: 0px 5px 5px 0px;
		}
	`;
	const {
		onChange,
		onDelete,
		amount,
		currency,
		reference,
		date,
		purpose,
		type,
		id,
		paymentType,
		debtor,
		benificiary,
		charges
	} = props;
	return (
		<ListItem>
			<ListItemTitleSubtitle>
				<ListItemTitle>{amount}</ListItemTitle>
				<ListItemSubtitle>{currency}</ListItemSubtitle>
			</ListItemTitleSubtitle>
			<ListItemTitleSubtitle>
				<ListItemTitle>{reference}</ListItemTitle>
				<ListItemSubtitle>{date}</ListItemSubtitle>
			</ListItemTitleSubtitle>
			<Button onClick={() => toggleExpanded(!expanded)}>
				<DownIcon className={(expanded && 'inverted') || ''} />
			</Button>
			<Button plain onClick={() => onDelete(id)}>
				<StyledDeleteIcon />
			</Button>
			{expanded && (
				<ExpandedSection>
					<ListItemTitleSubtitle>
						<ListItemTitle>Transaction</ListItemTitle>
						<ListItemSubtitle>{type}</ListItemSubtitle>
					</ListItemTitleSubtitle>
					<ListItemTitleSubtitle>
						<ListItemTitle>Reference</ListItemTitle>
						<InlineEditInput
							value={reference}
							onChange={val => onChange(val, 'reference', id)}
							viewProp="reference"
						/>
					</ListItemTitleSubtitle>
					<ListItemTitleSubtitle>
						<ListItemTitle>Purpose</ListItemTitle>
						<InlineEditInput
							value={purpose}
							onChange={val => onChange(val, 'purpose', id)}
							viewProp="purpose"
						/>
					</ListItemTitleSubtitle>
					<ListItemTitleSubtitle>
						<ListItemTitle>Payment Type</ListItemTitle>
						<ListItemSubtitle>{paymentType}</ListItemSubtitle>
					</ListItemTitleSubtitle>
					<ListItemTitleSubtitle>
						<ListItemTitle>From:</ListItemTitle>
						<ListItemSubtitle>{debtor.account_name}</ListItemSubtitle>
						<ListItemTitle>To:</ListItemTitle>
						<ListItemSubtitle>{benificiary.account_name}</ListItemSubtitle>
					</ListItemTitleSubtitle>
					<ListItemTitleSubtitle>
						<ListItemTitle>Amount</ListItemTitle>

						<ListItemSubtitle>
							{amount} {currency}
						</ListItemSubtitle>
						<ListItemTitle> + Charges</ListItemTitle>
						<ListItemSubtitle>
							{charges.receiver_charges_amount}{' '}
							{charges.receiver_charges_currency}
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
	id: PropTypes.string.isRequired,
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
