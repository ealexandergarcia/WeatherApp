import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent {
  @Input() weatherInfo:any;
  temp:string=""
  ngOnChanges():void{
    this.weatherInfo.main.temp = String(parseInt(this.weatherInfo.main.temp) - 273)
  }
}
