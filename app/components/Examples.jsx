var React=require('react');
var {Link}=require('react-router');
var Examples=React.createClass({

    render:function(){

        return(

            <div className="row">

              <h3 className="text-center">Examples</h3>
                <p>Here are a few location examples to try out:</p>
                <ol>
                    <li><Link to="/?location=Toronto">Toronto, ON </Link></li>
                    <li><Link to="/?location=Rio">Rio, Brazil</Link></li>
                </ol>

            </div>

        );
    }


});

module.exports=Examples;