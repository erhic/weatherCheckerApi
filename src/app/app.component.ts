import { Component,OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Weather';
  constructor(private weatherService:WeatherService){}

  city:string="Mombasa";
  weatherData?:WeatherData
  ngOnInit():void {
    this.getWeather(this.city)
    this.city="";
   
  }

  onSubmit(){
  this.getWeather(this.city)
  this.city="";
  }

  private getWeather(city:string){
    this.weatherService.getWeather(city)
    .subscribe({
      next:(response)=>{
        this.weatherData=response
        console
        .log(response)
      }
  })
}
  
}
