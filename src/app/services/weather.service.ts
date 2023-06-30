import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
city?: string
  constructor(private http:HttpClient) { }

  getWeather(city:string):Observable<WeatherData>{

   return this.http.get<WeatherData>(environment.weatherApiUrlName+'/city/'+city,{
      headers:new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),

    
    params:new HttpParams()
  
      .set('q',city)
      .set('units','metric')
      .set('mode','json')
    })
  }
  
  
}
