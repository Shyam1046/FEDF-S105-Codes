import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Propsdemo from './Propsdemo.jsx'
//import Nonstatedemo from './Nonstatedemo.jsx'
//import Stateobjectdemo from './Stateobjectdemo.jsx'
//import Listrender from './Listrender.jsx'
// import Timerdemo from './Timerdemo.jsx'
//import Form from './Form.jsx'
//import Routerdemo from './Routerdemo.jsx'
//import Childtoparent from './Childtoparent.jsx'
//import Reusablecomponents from './Reusablecomponents.jsx'
import Reduxdemo from './Reduxdemo.jsx'
import MaterialUIdemo from './MaterialUIdemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MaterialUIdemo/>
  </StrictMode>,
)
