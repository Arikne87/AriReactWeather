var React=require('react');
var WeatherForm=require('WeatherForm');
var Message=require('Message');
var OpenWeatherMap=require('OpenWeatherMap');


var Weather=React.createClass({
    getInitialState:function(){

        return{

            isLoading:false
        }

    },

    handleSearch:function(location){

        var that=this;
        this.setState({
            isLoading:true
        });
        var that=this;
        OpenWeatherMap.getTemp(location).then(function(temp){
          console.log(temp); console.log(location);

            that.setState({

                location:location,
                temp:temp,
                isLoading:false

            });
        },function(err){

            that.setState({



                isLoading:false

            });


     console.log(err);
        })


    },

    render:function(){
    var{isLoading,temp,location}=this.state;

        function renderMessage(){

            if(isLoading){
                console.log(isLoading);
                return <h3>Fecthing weather...</h3>

            }else if(temp && location ){
                console.log('ok is false now');
               return <Message temp={temp} location={location}/>
            }

        }


        return(

           <div >
               <h3>Wather Component</h3>
               <div >
                   <WeatherForm onSearch={this.handleSearch}/>
                   {renderMessage()}
               </div>


           </div>


        );
    }

});

module.exports=Weather;