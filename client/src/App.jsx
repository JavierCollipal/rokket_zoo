import './App.css';
import NabVar from './components/ui/NabVar';
import { Switch, Route } from 'react-router-dom';
import { appTitle } from './constants';
import loadable from '@loadable/component';

const Home = loadable(() => import('./components/home/Home'));
const Zoo = loadable(() => import('./components/zoo/Zoo'));

function App() {
	return (
		<div className="App">
			<NabVar title={appTitle} />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/zoo" component={Zoo} />
			</Switch>
		</div>
	);
}

export default App;
