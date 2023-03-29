import { createBrowserRouter } from 'react-router-dom'
import App from '../pages/App';
import People from '../pages/People';

export const routes = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/:id',
        element: <People />,
    }
]);
