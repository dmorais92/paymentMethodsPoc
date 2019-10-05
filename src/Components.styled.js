import styled from 'styled-components';

const THEME = {
	colors: {
		primary: '#00BCD4',
		secondary: '#fff'
	},
	font: {
		primaryColor: '#333',
		secondaryColor: 'rgba(0, 0, 0, 0.5)'
	}
};

const Page = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: flex-start;
	background-color: ${THEME.colors.secondary};
	color: ${THEME.font.primaryColor};
`;

const Layout = styled.div`
	width: 600px;
	margin: 0px 20px;
	display: flex;
	flex-flow: column nowrap;
	h1,
	h2 {
		font-family: Roboto;
		margin: 5px;
		font-style: normal;
	}
	h1 {
		font-weight: normal;
		font-size: 24px;
		line-height: 32px;
	}
	h2 {
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
		color: ${THEME.font.secondaryColor};
	}
`;

const AppBar = styled.div`
	width: 100%;
	background-color: ${THEME.colors.primary};
	color: ${THEME.colors.secondary};
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 23px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24), 0px 0px 4px rgba(0, 0, 0, 0.12);
	margin-bottom: 12px;
	padding: 16px;
	max-height: 56px;
`;

const List = styled.ul`
	margin: 32px 0px;
	padding: 16px;
	width: 100%;
`;

const ListItem = styled.li`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	list-style-type: none;
`;

const ListItemTitleSubtitle = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const ListItemTitle = styled.span`
	font-size: 16px;
	line-height: 24px;
	color: ${THEME.font.primaryColor};
`;

const ListItemSubtitle = styled.span`
	font-size: 14px;
	line-height: 20px;
	color: ${THEME.font.secondaryColor};
`;

export default {
	Page,
	AppBar,
	List,
	ListItem,
	Layout,
	ListItemTitleSubtitle,
	ListItemTitle,
	ListItemSubtitle
};
