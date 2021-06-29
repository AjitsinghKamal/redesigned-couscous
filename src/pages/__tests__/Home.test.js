import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders Home page', () => {
	render(<Home data-testid="home" />);
	const page = screen.getByTestId('home');
	expect(page).toBeInTheDocument();
});
