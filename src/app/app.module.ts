import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Arquivo de Rotas:
import { ROUTES } from './app.routes'

// Components:
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItensComponent } from './order/order-itens/order-itens.component';

// Services:
import { RestaurantsService } from './restaurants/restaurants.service';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderService } from './order/order.service';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';

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
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItensComponent,
    DeliveryCostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantsService,
    ShoppingCartService,
    OrderService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
