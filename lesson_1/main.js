const rootApp = document.querySelector('#root')

const greetingElement = React.createElement( // Create element
    'div',
    {className: 'hello'},
    'Hello React!', [
        React.createElement(    // Child element
           'div',
           {className: 'childElement'},
           'test' 
        ),
        React.createElement(     // Child element
            'div',
            {className: 'childElement'},
            'test 2' 
         )
    ]
)

ReactDOM.render(greetingElement, rootApp)   // add element from DOM

