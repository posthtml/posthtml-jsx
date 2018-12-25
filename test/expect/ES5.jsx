
var React = require('react')


var ES5 = React.createClass({
  render: function (prop1, ...prop2) {
    return (
      <div id="{id}" className="{class}">
        {ctx.content}
      </div>
      
    )
  }
})

module.exports = ES5