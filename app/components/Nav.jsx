var React=require('react');
var {Link,IndexLink}=require('react-router');
var Nav=React.createClass({

  onSearch:function(e){
      e.preventDefault();
  },
    render:function(){
        const divStyle = {
            color: 'white',
            backgroundColor: 'lightgreen',
        };
        return(

          <div className="top-bar">

              <div className="top-bar-left">
                  <ul className="menu simple">
                      <li className="menu-text">Raect Weather</li>
                      <li> <IndexLink  activeStyle={{fontWeight:'bold'}} activeClassName="active" to="/">Weather</IndexLink></li>
                      <li><Link   activeStyle={{fontWeight:'bold'}} activeClassName="active" to="about">About</Link></li>
                      <li><Link   activeStyle={{fontWeight:'bold'}} activeClassName="active" to="examples">Examples</Link></li>
                  </ul>

              </div>
              <div className="top-bar-right">
                  <form onSubmit={this.onSearch}>

                      <ul className="menu">
                          <li>
                              <input type="search" placeholder="Search Weather"/>
                          </li>
                          <li>
                              <button className="button success" type="submit">
                                  Get Weather
                              </button>
                          </li>
                      </ul>

                  </form>

              </div>


          </div>

        );
    }
});

 module.exports=Nav;

