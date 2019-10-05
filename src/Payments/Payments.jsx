import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StyledComponents from '../Components.styled';

const { Page, AppBar, List, ListItem, Layout } = StyledComponents;

const Payments = props => {
	const { className } = props;
	return (
		<Page classNamer={className}>
			<AppBar>Payment Methods</AppBar>
			<Layout>
				<List>
					<ListItem></ListItem>
				</List>
			</Layout>
		</Page>
	);
};

Payments.propTypes = {
	// bla: PropTypes.string,
};

Payments.defaultProps = {
	// bla: 'test',
};

const mapStateToProps = state => ({
	// blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
	// fnBlaBla: () => dispatch(action.name()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Payments);
