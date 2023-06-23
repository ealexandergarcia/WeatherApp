import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey:string="13dc7b5fa5931e769c3cba13b5aee73d";
  uri:string="";
  constructor(private http:HttpClient) {}

  getFromUserSelection(city:string){ //The user will bring us their city preferred
    this.uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(this.uri);
  }
}
