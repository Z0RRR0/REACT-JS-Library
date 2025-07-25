
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App ! Test</h1>
        </div>
    )
}

// const ReactElement = {
//     type : 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'Click me to visit Google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Sheldon Lee cooper"

const reactElement = React.createElement(
    'a',
    {href: 'https://www.google.com', target: '_blank'},
    'Click me to visit Google',
    anotherUser
)

createRoot(document.getElementById('root')).render(

    reactElement

)
