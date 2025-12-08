import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CounterProvider } from './Components/Context.jsx'
import LoginForm from './Pages/Login.jsx'


createRoot(document.getElementById('root')).render(
    
<StrictMode>
<BrowserRouter>
<CounterProvider>
<App/> 
{/* <LoginForm></LoginForm> */}
</CounterProvider>    
</BrowserRouter>
</StrictMode>,)




