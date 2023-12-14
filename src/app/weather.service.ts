import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = "a1b978d3c3f94f8ab081ca7b9d5c36d3";
  private apiUrl ="https:api.weatherbit.io/v2.0/current?country=India&city=`${{city}}`"

  // private apikeySev ="a1b978d3c3f94f8ab081ca7b9d5c36d3"
  // private apiUrlSev ="https://api.weatherbit.io/v2.0/forecast/daily?lat=23.2&lon=77.4&key=a1b978d3c3f94f8ab081ca7b9d5c36d3&units=I&start_day=23-08&end_day=29-08="
 

  constructor(private http: HttpClient) { }
  
  getWeatherByCity(city: string) {
    // Rest of your code remains the same
    const params = new HttpParams()
      .set('city', encodeURIComponent(city))
      // .set('country', encodeURIComponent(this.country)) // You can also bind country if needed
      .set('key', this.apiKey)
      .set('include', 'minutely');
      
    console.log("API Request:", this.apiUrl + '?' + params.toString());
  
    return this.http.get(this.apiUrl, { params });
  }

  // getWeatherByCitysev(seven : string){
  //   const urlsev =`${this.apiUrlSev}?q=${seven}&appid=${this.apikeySev}`;
  //   return this.http.get(urlsev)
  // }
 
}
