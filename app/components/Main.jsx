var React=require('react');

var Nav=require('Nav');

var Main=React.createClass({

    render: function () {
     return(
         <div>
            <Nav/>
            <div className="row">

                 <div className= "column medium-8 large-6 medium-centered">
                     {this.props.children}
                 </div>

            </div>

       </div>

     );
    }
});

module.exports=Main;