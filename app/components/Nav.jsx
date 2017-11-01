var React=require('react');
var {Link,IndexLink}=require('react-router');
var Nav=React.createClass({


    render:function(){
        const divStyle = {
            color: 'white',
            backgroundColor: 'lightgreen',
        };
        return(

            <ul className="nav" style={divStyle}>
                <li className="nav-item">
                    <IndexLink className="nav-link" activeStyle={{fontWeight:'bold'}} activeClassName="active" to="/">Weather</IndexLink>
                </li>
                <li className="nav-item">
                   <Link className="nav-link"  activeStyle={{fontWeight:'bold'}} activeClassName="active" to="about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"  activeStyle={{fontWeight:'bold'}} activeClassName="active" to="examples">Examples</Link>
                </li>

            </ul>

        );
    }
});

 module.exports=Nav;