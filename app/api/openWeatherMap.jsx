var axios=require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=a0b78983f1913184390c3da4c203f4d8&units=metric';

module.exports={

    //a0b78983f1913184390c3da4c203f4d8

    getTemp:function (location){
     // with backtick `${}` inject variable inside the string
        var encodeLocation= encodeURIComponent(location);
        var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

        return axios.get(requestUrl).then(function(res){

            //debugger;
            console.log(res);
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);

            }else{

                return res.data.main.temp;
            }

        },function(res){

            throw new Error(res.data.message);

        } );

}
};