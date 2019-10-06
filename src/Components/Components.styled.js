import styled from 'styled-components';

const THEME = {
  colors: {
    primary: '#00BCD4',
    secondary: '#fff',
    neutral: '#eee',
  },
  font: {
    primaryColor: '#333',
    secondaryColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const rotateAnimation = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;

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
  ${rotateAnimation}
  max-width: 600px;
  width: 100%;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    margin: 12px;
    padding: 6px;
    height: auto;
    &.syncing {
      svg {
        animation: spin 0.5s ease-out infinite;
      }
    }
    svg {
      height: 16px;
      width: 16px;
      margin: 0px 6px;
      > :first-child {
        fill: ${THEME.colors.secondary};
      }
    }
  }
  h2 {
    ont-weight: 500;
    font-size: 14px;
    line-height: 17px;
    max-width: 50%;
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
  justify-content: space-around;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24), 0px 0px 4px rgba(0, 0, 0, 0.12);
  margin-bottom: 12px;
  padding: 16px;
  max-height: 56px;
  div {
    display: flex;
    flex-flow: column nowrap;
    svg {
      width: 24px;
      height: 24px;
    }
    span {
      display: flex;
      flex-flow: row nowrap;
      font-size: 12px;
      a {
        color: ${THEME.colors.secondary} !important;
      }
    }
  }
`;

const Loader = styled.div`
  ${rotateAnimation}
  align-self: center
  svg {
    animation: spin 2.5s ease-out infinite;
    height: 64px;
    width: 64px;
    margin: 0px 6px;
    > :first-child {
      fill: ${THEME.colors.primary};
    }
  }
`;

const List = styled.ul`
	margin: 12px 0px;
	padding: 24px;
	overflow-y: auto;
	overflow-x: hidden;
	max-height 65vh;
`;

const ListItem = styled.li`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  list-style-type: none;
  min-height: 72px;
  padding: 0px 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border-radius: 2px;
  margin: 24px auto;
  button {
    height: 32px;
  }
  svg {
    height: 12px;
    width: 12px;
    transition: all 0.25s;
    &.inverted {
      transform: rotate(180deg);
    }
  }
  &:hover {
    background-color: ${THEME.colors.neutral};
  }
`;

const ListItemTitleSubtitle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 30%;
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

const Button = styled.button`
  background-color: ${(props) => (!props.plain && THEME.colors.primary) || 'transparent'};
  border-radius: 2px;
  border: none;
  color: ${THEME.colors.secondary};
  &:hover {
    background-color: ${(props) => (!props.plain && '#0097a7') || 'transparent'};
    cursor: pointer;
  }
`;

export default {
  Page,
  AppBar,
  List,
  ListItem,
  Layout,
  Button,
  ListItemTitleSubtitle,
  ListItemTitle,
  ListItemSubtitle,
  Loader,
};
