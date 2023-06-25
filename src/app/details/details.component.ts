import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() weatherInfo:any;

  
  ngOnChanges():void{
    this.weatherInfo.main.temp_max = String(parseInt(this.weatherInfo.main.temp_max)-273)
    this.weatherInfo.main.temp_min = String(parseInt(this.weatherInfo.main.temp_min)-273)
  }
}
