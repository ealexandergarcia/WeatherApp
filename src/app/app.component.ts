import { Component, OnChanges, OnInit } from '@angular/core';
import { WeatherService } from './weather.service'; //import weather service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weatherInfo: any = [];
  appBackColor:string = "";
  backImage:string="";

  constructor(private weather:WeatherService) { // al iniciar el aplicativo pide la ubicacion y muestra el clima de lugar actual
    this.getcurrentPosition();
    setTimeout(()=>{
      //esperamos q seegundo para verificar si el usuario permitio la ubicacion sino se obtendra el clima por defecto de bogota
      if (this.weatherInfo.length ===0) {
        this.getWeatherInfo("Bogota");
      }
      this.getStyle(this.weatherInfo);
    },1500)
  }

  getcurrentPosition (){
    this.weather.getLocation().then(resp=>{
      this.weather.getFromActualPosition(resp.lng, resp.lat).subscribe(data=>{
        this.weatherInfo = data;
      });
    });
  }

  getStyle(data:any){
    if(parseInt(data.main.temp)<27){ //frio si está por debajo de los 27°c
      this.appBackColor = "#3053AE";
      this.backImage = "url('../assets/cold.jpg')"
    }else if (parseInt(data.main.temp)>=27){
      console.log("Esta mierda funciona");
      this.appBackColor = "#E9B329";
      this.backImage = "url('../assets/warm.jpg')"
    }
  }

  getWeatherInfo(value:string) {
    this.weather.getFromUserSelection(value).subscribe(data => {
      this.weatherInfo = data
      console.log("Papi este es la funcion")
      console.log(data);
      setTimeout(()=>{//timeout para esperar respuesta del servicio http con informacion solicitada y luego verificar la temperatura y cambiar estilos
        this.getStyle(this.weatherInfo);
      },500);
    });
  }
}
