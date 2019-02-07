// import { MatSnackBar } from '@angular/material';
import { Wishlist } from './../wishlist';
import { TrackService } from './../track.service';
import { CardcontainerComponent } from './../cardcontainer/cardcontainer.component';
import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../track';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  watchListApi = true;
  private tracks: Array<Track>;
  private statusCode: number;
  private errorStatus: string;

  constructor(private trackService: TrackService, private snackBar: MatSnackBar) {
    this.tracks = [];
  }


  // ngOnInit() {
    // this.trackService.getAllWishListTrack1().subscribe(data => {
    //   // if (data.length === 0) {
    //   //   this.snackBar.open('Wish list is mepty', '', {duration: 1000});
    //   // }
    //   this.tracks = data; });
   // }
//     deleteFromWishlist(track: Track) {
//          this.trackService.deleteTrackFromWishList(track).subscribe((data: any) => {
//            console.log('result', data);
//          });
//   }
//   updateComments(track: Track) {
//     console.log('in wishlist');
//     this.trackService.updateComments(track).subscribe((data) => {
//       console.log('data', data);
//     //   this.snackBar.open('successfully updated', '', {
//     //     duration: 1000
//     // });
//   // tslint:disable-next-line:semicolon
//   }
//     );
// }
// }
ngOnInit() {
  this.fetchTracks();
}

private fetchTracks() {
  this.trackService.getAllWishListTrack1().subscribe((res: any) => {
    this.tracks = res;
    console.log(this.tracks);
    });
}

deleteTrack(trackId) {
  this.trackService.deleteTrackFromWishList(trackId).subscribe(
    response => {
    //  this.statusCode = response.status;
      if (this.statusCode === 200) {
        this.fetchTracks();
        console.log('Success', this.statusCode);
        this.snackBar.open('Track Successfully Deleted !!!', '', {
          duration: 1500
        });
      }
    },
    err => {
      const errorStatus = err;
      this.statusCode = parseInt(errorStatus, 10);
      if (this.statusCode === 404) {
        this.snackBar.open('Track Doesn\'t Exist', '', {
          duration: 1500
        });
        this.statusCode = 0;
      }
  });
}

updateComments(track) {
  this.trackService.updateComments(track).subscribe(
    response => {
     // this.statusCode = response.status;
      if (this.statusCode === 200) {
        this.fetchTracks();
        console.log('Success', this.statusCode);
        this.snackBar.open('Track Successfully Updated !!!', '', {
          duration: 1500
        });
      }
    },
    err => {
      const errorStatus = err;
      this.statusCode = parseInt(errorStatus, 10);
      if (this.statusCode === 404) {
        this.snackBar.open('Track Doesn\'t Exist', '', {
          duration: 1500
        });
        this.statusCode = 0;
      }
  });
}

}
