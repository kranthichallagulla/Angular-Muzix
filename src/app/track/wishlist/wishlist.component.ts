
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { TrackService } from '../track.service';
import { Track } from '../track';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  tracks: Array<Track>;
  message: string;
   watchListApi  = true;
  constructor(private trackService: TrackService , private snackBar: MatSnackBar) {
    this.tracks = [];
   }


  ngOnInit() {

    this.message = 'Wishlist is empty';
  this.trackService.getAllWishListTrack1().subscribe(data => {
    if ( data.length === 0) {
      this.snackBar.open('WishList is empty', '', {
        duration: 1000
      });
    }
       this.tracks = data;
    });


}

deleteFromWishlist(track: Track) {
// console.log('Track to be deleted' , track);
this.trackService.deleteTrackFromWishList(track).subscribe((data) => {
  console.log('result' , data);
});

// const index = this.tracks.indexOf(track);
// this.tracks.splice(index, 1);

}

updateComments(track: Track) {
  console.log('in wishlist');
 this.trackService.updateComments(track).subscribe((data) => {
   console.log('data' , data);
   this.snackBar.open('Successfully updated', '' , {
    duration: 1000
  });
},
error => {
 console.log('error' , error);
}
);
}
}
