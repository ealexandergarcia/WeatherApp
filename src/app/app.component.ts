import { Component } from '@angular/core';
import { WeatherService } from './weather.service'; //import weather service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private weather:WeatherService) { }
  weatherInfo: any = [];
  city: string = "";
  getWeatherInfo(value:string) {
    this.weather.getFromUserSelection(value).subscribe(data => {
      this.weatherInfo = data
      console.log("Papi este es la funcion")
      console.log(data);
    });
  }
}
