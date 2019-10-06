import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import PaymentMethodItem from './PaymentMethodItem';

const testProps = {
	type: 'Payment',
	currency: '€',
	amount: '435.55',
	id: 'test_id_1234',
	purpose: 'Shopping payment',
	paymentType: 'VISA',
	reference: 'Groceries',
	date: '23-02-2018',
	beneficiary: {
		account_name: 'Test'
	},
	debtor: {
		account_name: 'Mr. Debtor'
	},
	charges: {
		receiver_charges_ammount: '34',
		receiver_charges_currency: '€'
	}
};

describe('PaymentMethodItem component', () => {
	const toggleExpanded = jest.fn();
	const useStateSpy = jest.spyOn(React, 'useState');
	useStateSpy.mockImplementation(init => [init, toggleExpanded]);
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<PaymentMethodItem />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('matches snapshot', () => {
		const component = renderer.create(<PaymentMethodItem />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('renders with test props', () => {
		const div = document.createElement('div');
		ReactDOM.render(<PaymentMethodItem {...testProps} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	it('expands and renders text inputs', () => {
		const component = renderer.create(<PaymentMethodItem {...testProps} />);
		const testInstance = component.root;
		const expandButton = testInstance.findByProps({
			'data-test-id': 'expand-button'
		});
		renderer.act(() => {
			expandButton.props.onClick();
		});
		expect(
			testInstance.findAllByProps({ 'data-test-id': 'inline-inputs' }).length
		).toBe(2);
	});
	it('changing reference text input will also change reference title', () => {
		const component = renderer.create(
			<PaymentMethodItem
				{...testProps}
				onChange={val => {
					testProps.reference = val;
				}}
			/>
		);
		const testInstance = component.root;
		const expandButton = testInstance.findByProps({
			'data-test-id': 'expand-button'
		});
		renderer.act(() => {
			expandButton.props.onClick();
		});
		const referenceInput = testInstance.findAllByProps({
			'data-test-id': 'inline-inputs'
		})[0];
		renderer.act(() => {
			referenceInput.parent.props.onChange('Cenas');
		});
		expect(testProps.reference).toBe('Cenas');
	});
});
