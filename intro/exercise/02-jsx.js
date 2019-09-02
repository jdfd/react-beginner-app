const rootEl = document.getElementById('root');
// const content = 'Hello, World!';
const props = {
  className: 'container',
  children: 'Hello, World!'
};
const element = <h1 {...props} />

ReactDOM.render(element, rootEl);