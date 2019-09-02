// PURE JAVASCRIPT

// const rootEl = document.getElementById('root');
// const element = document.createElement('h1');
// element.textContent = 'Hello, World!';
// element.className = 'container';
// rootEl.appendChild(element);

// REACT
// const element = React.createElement(
//   'h1',
//   { className: 'container' },
//   'Hello, World!'
// );
const rootEl = document.getElementById('root');
const element = React.createElement(
  'h1',
  {
    className: 'container',
    children: 'Hello, World'
  }
);

ReactDOM.render(element, rootEl);