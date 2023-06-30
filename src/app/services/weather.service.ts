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
  XRapidAPIKeyHeaderValue:string="8a7899fe14bmsh47f0ff9261fb18cp1aad5cjsnc4fc28a4cb94"
  
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
