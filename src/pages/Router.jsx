import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShellLayout from 'layouts/Shell';

const AsyncHomePage = lazy(() => import('./Home'));

function Router() {
	return (
		<BrowserRouter>
			<ShellLayout>
				<Suspense fallback={<small>Loading...</small>}>
					<Switch>
						<Route path="/">
							<AsyncHomePage />
						</Route>
					</Switch>
				</Suspense>
			</ShellLayout>
		</BrowserRouter>
	);
}

export default Router;
