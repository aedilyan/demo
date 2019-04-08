
var util = require('./src/utils');

console.log('index');

var React = require('react');
var ReactDOMServer = require('react-dom/server');
 
class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}
 
ReactDOMServer.renderToString(<MyComponent />);