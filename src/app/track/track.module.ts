import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { CardcontainerComponent } from './cardcontainer/cardcontainer.component';
// tslint:disable-next-line:no-unused-expression
import { MatCardModule, MatSnackBarModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TrackMaterialModule } from './track.material.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WishlistComponent, SearchComponent, CardComponent, CardcontainerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    TrackMaterialModule
  ],
  exports: [HeaderComponent, FooterComponent, WishlistComponent, SearchComponent, CardComponent, CardcontainerComponent]
})
export class TrackModule { }
