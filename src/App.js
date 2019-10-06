import React from 'react';
import PaymentMethods from './Components/PaymentMethods';
import StyledComponents from './Components/Components.styled';
import { ReactComponent as Logo } from './Components/Icons/logo.svg';

const { AppBar } = StyledComponents;

function App({ className }) {
	return (
		<div className={`App ${className}`}>
			<AppBar>
				<span>Payments</span>
				<div>
					<span>
						Made with React <Logo />
					</span>
					<span>by</span>
					<span>
						<a href="https://github.com/dmorais92/"> David Morais</a>
					</span>
				</div>
			</AppBar>
			<PaymentMethods />
		</div>
	);
}

export default App;
