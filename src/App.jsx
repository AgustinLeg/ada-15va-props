import './App.css';

import LogoReact from './assets/react.svg';

import { Alert } from './components/Alert/Alert';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { AppLayout } from './layouts/AppLayout';

function App() {
	return (
		<AppLayout>
			<div className="App">
				<h1>Mi pagina</h1>
				<img src={LogoReact} alt="logo de react" />
				<img src="/images/vite.svg" alt="logo de vite" />

				<div className="container">
					<Button color="red" size="lg">
						Hola desde children
					</Button>
					<Button color="blue" size="sm">
						chau desde children
					</Button>
					<Button color="green" />
				</div>
				<div className="container">
					<Alert type="warning">
						<div>
							<h1 style={{ fontSize: '14px' }}>Esto es una ALERTA</h1>
						</div>
					</Alert>
					<Alert type="error">
						<div>
							<h1>Ups hubo un error.</h1>
							<img src="/images/vite.svg" alt="logo de vite" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								assumenda, ad, porro nemo dicta magni fugiat totam adipisci
								numquam iste optio tempora tempore laborum necessitatibus
								aliquam harum repellendus obcaecati consequatur.
							</p>
						</div>
					</Alert>
				</div>

				<div className="container">
					<Card
						title="Card 1"
						img="https://illustoon.com/photo/350.png"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
					/>
				</div>
			</div>
		</AppLayout>
	);
}

export default App;
