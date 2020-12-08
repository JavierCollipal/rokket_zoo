import './App.css';
import NabVar from './components/ui/NabVar';
import { Switch, Route } from 'react-router-dom';
import { appTitle } from './constants';
import loadable from '@loadable/component';

const Home = loadable(() => import('./components/home/Home'));

function App() {
	return (
		<div className="App">
			<NabVar title={appTitle} />
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default App;
