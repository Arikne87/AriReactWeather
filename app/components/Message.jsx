var React=require('react');

var Messagge=React.createClass({


    render: function () {
        var {temp,location}=this.props;
        return(
            <p>The temperature in  {location} is {temp}!</p>
        )

    }
});

module.exports=Messagge;