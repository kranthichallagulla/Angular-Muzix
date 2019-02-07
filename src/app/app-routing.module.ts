import { WishlistComponent } from './track/wishlist/wishlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardcontainerComponent } from './track/cardcontainer/cardcontainer.component';

const routes: Routes = [
  {
    path: '',
    component: CardcontainerComponent,
    data: { country: 'Australia'}
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
