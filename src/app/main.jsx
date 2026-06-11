import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './styles/index.css'
import routes from './routes.jsx'
import { AuthProvider, UserProvider } from '../entities/user/index.js'

const queryClient = new QueryClient();
const routesrouter = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <UserProvider>
        <RouterProvider router = {routesrouter} />
      </UserProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
