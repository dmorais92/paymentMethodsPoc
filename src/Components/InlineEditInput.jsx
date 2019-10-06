import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as EditIcon } from './Icons/editIcon.svg';
import { RIEInput } from 'riek2';

const InlineEditInput = props => {
	const { onChange, value, viewProp, className } = props;
	return (
		<div className={className} data-test-id="inline-inputs">
			<EditIcon />
			<RIEInput
				value={value}
				change={onChange}
				propName={viewProp}
				className="input"
				classEditing="input-editing"
				validate={value => value.length}
			/>
		</div>
	);
};

InlineEditInput.propTypes = {
	onChange: PropTypes.func,
	viewProp: PropTypes.string.isRequired,
	value: PropTypes.string
};

InlineEditInput.defaultProps = {
	onChange: null,
	value: ''
};

export default styled(InlineEditInput)`
	display: flex;
	flex-flow: row wrap;
	aling-items: center;
	.input {
		font-size: 14px;
		line-height: 20px;
		color: rgba(0, 0, 0, 0.5);
		border-radius: 4px 4px 0px 0px;
		border: none;
		&.input-editing {
			padding: 0px 6px;
			background-color: #ddd;
			outline: none;
		}
	}
	svg > :first-child {
		fill: #00bcd4;
	}
`;
