import { TrackService } from './../track.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Track } from '../track';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  comments: string;
  @Input()
  track: Track;
  @Input()
  statusCode: number;
  @Input() url: string;
  @Input()
  watchListApi: boolean;
  @Output() addToWishList  = new EventEmitter<Track>();
  @Output() deleteFromWishList = new EventEmitter<string>();
  status: boolean;
  dialog: any;
  updateComments: any;
  TrackService: any;
  constructor() { }

  ngOnInit() {
    console.log('data value', this.track);
  }
  onClickMe(track: Track) {
    console.log('default value of boolean' , this.watchListApi);
    console.log('track is 123' , track);
  this.addToWishList.emit(track);
   }

   deleteTrack(track: Track) {
     console.log('track is 1234', track);
     this.deleteFromWishList.emit(track.trackId);
    // this.TrackService.deleteTrackFromWishList().emit(track);
 }
   addComments(actionType): void {
     console.log('in add comments');
    const dialogRef = this.dialog.open({

      width: '55vh',
      height: '30vh',
      data: { trackId : this.track.trackId , comments : this.track.comments }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' , result);
      // this.comments = result;
      this.track.comments = result;
       this.updateComments.emit(this.track);
   // console.log('In Card comments' , result);
    });
}
}
