var React=require('react');


var WeatherForm=React.createClass({



    onSubmitForm:function(e){

        e.preventDefault();
        var location=this.refs.location.value;

        if(location.length>0){
            this.refs.location.value='';
            this.props.onSearch(location);
        }
    },


    render:function(){



        return(

            <form onSubmit={this.onSubmitForm}>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="text" className="form-control"  placeholder="Enter a City" ref="location"/>

                </div>
             
            
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>



        );
    }


});

module.exports=WeatherForm;