import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import { StoreProvider } from './hooks/contexts/GlobalContext.tsx';
import { UserDataProvider } from './hooks/contexts/UserContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <UserDataProvider>
    <App />
    </UserDataProvider>
    </StoreProvider>
  </StrictMode>,
)
