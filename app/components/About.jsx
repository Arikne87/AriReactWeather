var React=require('react');

var About=React.createClass({

    render:function(){

        return(

           <div>
               <h3 className="text-center">About</h3>
               <div className="row">
                   <div className="medium-6 columns">
                      <img src="http://lorempixel.com/400/200/sports"/>
                       </div>
                   <div className="medium-6 columns">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Accusantium, deserunt, dolores esse et eum eveniet excepturi
                       facere, illo laborum minus non quam sed temporibus totam voluptatum.
                       Harum ipsa qui temporibus?
                   </div>
               </div>
               <div className="row">
                   <div className="medium-6 columns">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Accusantium, deserunt, dolores esse et eum eveniet excepturi
                       facere, illo laborum minus non quam sed temporibus totam voluptatum.
                       Harum ipsa qui temporibus?
                   </div>
                   <div className="medium-6 columns">
                       <img src="http://lorempixel.com/400/200/sports"/>
                   </div>

               </div>

               <div className="row">

                   <div className="medium-4 columns">
                       <div className="card" >
                           <div className="card-divider">
                               This is a header
                           </div>
                           <img src="http://lorempixel.com/400/200/sports" />
                               <div className="card-section">
                                   <h4>This is a card.</h4>
                                   <p>It has an easy to override visual style, and is appropriately subdued.</p>
                               </div>
                       </div>

                   </div>
                   <div className="medium-4 columns">
                       <div className="card" >
                           <div className="card-divider">
                               This is a header
                           </div>
                           <img src="http://lorempixel.com/400/200/sports" />
                           <div className="card-section">
                               <h4>This is a card.</h4>
                               <p>It has an easy to override visual style, and is appropriately subdued.</p>
                           </div>
                       </div>

                   </div>
                   <div className="medium-4 columns">
                       <div className="card" >
                           <div className="card-divider">
                               This is a header
                           </div>
                           <img src="http://lorempixel.com/400/200/sports" />
                           <div className="card-section">
                               <h4>This is a card.</h4>
                               <p>It has an easy to override visual style, and is appropriately subdued.</p>
                           </div>
                       </div>

                   </div>

               </div>
           </div>



        );
    }

});

module.exports=About;