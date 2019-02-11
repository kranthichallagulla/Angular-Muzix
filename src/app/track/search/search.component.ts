import { TrackService } from './../track.service';
import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../track';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value: string;
  @Input()
  track: Track;

  onKey(event: any) {
    this.value = event.target.value;
    console.log(this.value);
    this.trackService.filter(this.value);
  }
  constructor(private trackService: TrackService) {
    console.log('name' , this.value);
  }
  ngOnInit() {
// console.log('values' , this.values);
}

}
