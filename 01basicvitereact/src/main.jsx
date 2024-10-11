import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type: 'a',
  props: {
      href: "http://google.com",
      target: "_blank"
  },
  children: "click me to visit"

}

function MyApp() {
  return(
    <>
    <h1>Hello from custom react</h1>
    </>
  )
}

const element = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'click me'
)
createRoot(document.getElementById('root')).render(
    <MyApp/>
    
)
