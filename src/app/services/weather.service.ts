import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environments';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
city?: string;

 
 XRapidAPIHostHeaderName:string="X-RapidAPI-Host";
 XRapidAPIHostHeaderValue:string="open-weather13.p.rapidapi.com";

  XRapidAPIKeyHeaderName:string="X-RapidAPI-Key"
  XRapidAPIKeyHeaderValue:string="893fc6e6cfmsh5abf3539bd17c34p168ee4jsn7fbd64c24430"
  
  constructor(private http:HttpClient) { }

  getWeather(city:string):Observable<WeatherData>{

   return this.http.get<WeatherData>('https://open-weather13.p.rapidapi.com/city/'+city,{
      headers:new HttpHeaders()
      .set(this.XRapidAPIHostHeaderName,this.XRapidAPIHostHeaderValue)
      .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue),

    
    params:new HttpParams()
  
      .set('q',city)
      .set('units','metric')
      .set('mode','json')
    })
  }
  
  
}
