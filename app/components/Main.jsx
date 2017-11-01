var React=require('react');

var Nav=require('Nav');

var Main=React.createClass({

    render: function () {
     return(
         <div className="container-fluid">
            <Nav/>
            <h2>Main</h2>
             {this.props.children}
       </div>

     );
    }
});

module.exports=Main;