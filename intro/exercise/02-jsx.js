const rootEl = document.getElementById('root');
const content = 'Hello, World!';
const myClassName = 'container';
const element = <h1 className={myClassName}>{content}</h1>;

ReactDOM.render(element, rootEl);