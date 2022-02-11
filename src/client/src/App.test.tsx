import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const MockLayout: React.FC<any> = ({ layout, children }) => (
  <>
    {layout}
    {children}
  </>
);

const MockDashboard: React.FC<any> = ({ dashboard }) => (
  <>
    {dashboard}
  </>
);

describe('App', () => {
  const dashboard = 'dashboard';
  const layout = 'layout';

  const getMocks = (overrides?: any) => ({
    Layout: <MockLayout layout={layout} />,
    Dashboard: <MockDashboard dashboard={dashboard} />,
    ...overrides,
  });

  it('should render the dashboard', () => {
    const result = render(<App deps={getMocks()} />);
    expect(result.getByText(layout)).toBeInTheDocument();
  });
});
