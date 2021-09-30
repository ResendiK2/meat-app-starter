import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

// Components:
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './restaurant-detail/menu/menu.component';
import {MenuItemComponent} from './restaurant-detail/menu-item/menu-item.component';
import {ShoppingCartComponent} from './restaurant-detail/shopping-cart/shopping-cart.component';

// Services:
import {RestaurantsService} from './restaurants/restaurants.service';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
