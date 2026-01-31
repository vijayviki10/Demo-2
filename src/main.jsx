import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CounterProvider } from './Components/Context.jsx'
import LoginForm from './Pages/Login.jsx'
import { LoginProvider } from './Pages/LoginContext.jsx'


createRoot(document.getElementById('root')).render(

<StrictMode>
<BrowserRouter>
<CounterProvider>
<LoginProvider>
    <App/>
</LoginProvider>    
 
{/* <LoginForm></LoginForm> */}
</CounterProvider>    
</BrowserRouter>
</StrictMode>
,)




