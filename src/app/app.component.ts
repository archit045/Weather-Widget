import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weather-Widget';
  weatherdata: any;
  weather: any;
  weatherIconMap: any;
  city : string = ''; 
  wind : string = '';
  country : string ='';
  temperature: string ='';
  description : string = ''

  constructor(private weatherService: WeatherService) {}

//  Function declartion 
  ngOnInit() {
    this.getWeatherData('')
    // this.getWeatherDatasev('');
  }

  onSubmit() {
      this.getWeatherData(this.city);
  }
  //Fuction and fetch data from the of the api for current day, wind, temprature, description, city, icon and store them in a pbject and one variable to display or use in the html 
  getWeatherData(city: string) {
    const apiKey = 'a1b978d3c3f94f8ab081ca7b9d5c36d3';
    const apiUrl = 'https://api.weatherbit.io/v2.0/current?city={{city}}&country{{country}}';

    const params = new HttpParams()
      .set('city', city)
      .set('country', this.country)
      .set('wind', this.wind)
      .set('app_temp', this.temperature)
      .set('description', this.description)
      .set('key', apiKey)
      .set('include', 'minutely');

    this.weatherService.getWeatherByCity(city).subscribe(
      (response : any) => {
        console.log('API Response:', response);

        this.weatherdata = {
          temperature: response.data[0].app_temp,
          description: response.data[0].weather.description,
          city: response.data[0].city_name,
          country: response.data[0].country_code,
          wind : response.data[0].wind_spd,
          precip: response.data[0].precip,
          pressure: response.data[0].pres,
          weather: {
            icon: response.data[0].weather.icon,
          }
        };
      },
      (error: any) => {
        console.error('API Error:', error);
        console.error('API Error Details:', error.message);
      }
    );
    }
  //Fuction and fetch data from the of the api for seven days, wind, temprature, description, city, icon and store them in a pbject and one variable to display or use in the html 
  // getWeatherDatasev(seven: any) {
  //   this.weatherService.getWeatherByCitysev(seven).subscribe(
  //     (get: any) => {
  //       this.weather = {
  //         weather1: get.data[0].max_temp,
  //         weather11: get.data[0].min_temp,
  //         weather111 : {
  //           icon : get.data[0].weather.icon,
  //         },
  //         weather2: get.data[1].max_temp,
  //         weather22: get.data[1].min_temp,
  //         weather222 : {
  //           icon : get.data[1].weather.icon,
  //         },
  //         weather3: get.data[2].max_temp,
  //         weather33: get.data[2].min_temp,
  //         weather333: {
  //           icon : get.data[2].weather.icon,
  //         },
  //         weather4: get.data[3].max_temp,
  //         weather44: get.data[3].min_temp,
  //         weather444: {
  //           icon : get.data[3].weather.icon,
  //         },
  //         weather5: get.data[4].max_temp,
  //         weather55: get.data[4].min_temp,
  //         weather555 : {
  //           icon : get.data[4].weather.icon,
  //         },
  //         weather6: get.data[5].max_temp,
  //         weather66: get.data[5].min_temp,
  //         weather666 : {
  //           icon : get.data[5].weather.icon,
  //         },
  //         weather7: get.data[6].max_temp,
  //         weather77: get.data[6].min_temp,
  //         weather777 : {
  //           icon : get.data[6].weather.icon,
  //         }
  //       };
  //     },
  //     (error) => {
  //       console.error('API Error:', error);
  //     }
  //   );
  // }
  // // function to chnage the image default according to the icon code 
  getWeatherIconUrl(iconCode: string): string {
    return `assets/${weatherIconMap[iconCode]}`;
  }
 }
 //constructor to fetch the image code from the api for seven days and change image according to the icon. and  store the icon in a icon code  to chnage in the html or show according to the weather. 
  const weatherIconMap :  { [key: string]: string } = {
  'c02d' : 'cloudsun.png',
  'c02n' : 'cloudnight.png',
  'a03d' : 'haze.png',
  'a03n' : 'Hazen.png',
  'c01d' : 'sun.png',
  'c01n' : 'moon.png',
  'c04d' : 'overcastclouds.png',
  'c04n' : 'overcastclouds.png',
  't01d' : 'thunderstromlightrain.png',
  't01n' : 'thunderstromlightrainni.png',
  't02d' : 'thunderstromlightrain.png',
  't02n' :'thunderstromlightrainni.png',
  't03d' : 'thunderstromlightrain.png',
  't03n' : 'thunderstromlightrainni.png',
  't04d' : 'thunderstromdrizzleday.png',
  't04n' : 'thunderstromdrizzleday.png',
  't05d' : 'thunderstromdrizzleday.png',
  't05n' : 'thunderstromdrizzleday.png',
  'd01d' : 'drizzle.png',
  'd01n' : 'drizzle.png',
  'd02d' : 'drizzle.png',
  'd02n' : 'drizzle.png',
  'd03d' : 'drizzle.png',
  'd03n' : 'drizzle.png',
  'r01d' : 'lightrain.jpg',
  'r01n' : 'lightrain.jpg',
  'r02d' : 'lightrain.jpg',
  'r02n' : 'lightrain.jpg',
  'r03d' : 'rain.png',
  'r03n' : 'rain.png',
  'f01d' : 'lightrain.jpg',
  'f01n' : 'lightrain.jpg',
  'r04d' : 'lightrain.jpg',
  'r04n' : 'lightshowernight.png',
  'r05d' : 'lightshowerday.png',
  'r05n' : 'lightshowernight.png',
  'r06d' : 'rain.png',
  'r06n' : 'lightshowernight.png',
  's01d' : 'snow.png',
  's01n' : 'snow.png',
  's02d' : 'snow.png',
  's02n' : 'snow.png',
  's03d' : 'snow.png',
  's03n' : 'snow.png',
  's04d' : 'snowrain.png',
  's04n' : 'snowrain.png',
  's05d' : 'sleet.png',
  's05n' : 'sleet.png',
  's06d' : 'snow.png',
  's06n' : 'snow.png',
  'a01d' : 'haze.png',
  'a01n' : 'Hazen.png',
  'a02d' : 'haze.png',
  'a02n' : 'Hazen.png',
  'a04d' : 'haze.png',
  'a04n' : 'Hazen.png',
  'a05d' : 'haze.png',
  'a05n' : 'Hazen.png',
  'a06d' : 'haze.png',
  'a06n' : 'Hazen.png',
  'c03d' : 'brokencloud.png',
  'c03n' : 'brokencloud.png',
  'u00d' : 'lightrain.jpg',
  'u00n' : 'lightrain.jpg',
};