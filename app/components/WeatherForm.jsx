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

                    <label >Enter City Name</label>
                    <input type="text"   placeholder="Enter a City" ref="location"/>


             
            
                <button type="submit" className="expanded hollow button success">Submit</button>
            </form>



        );
    }


});

module.exports=WeatherForm;