// PURE JAVASCRIPT

// const rootEl = document.getElementById('root');
// const element = document.createElement('h1');
// element.textContent = 'Hello, World!';
// element.className = 'container';
// rootEl.appendChild(element);

// REACT
const rootEl = document.getElementById('root');
const element = React.createElement(
  'h1',
  { className: 'container' },
  'Hello, World!'
);

ReactDOM.render(element, rootEl);