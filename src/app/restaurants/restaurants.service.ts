import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

import { MEET_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEET_API}/restaurants`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEET_API}/restaurants/${id}`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError)
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEET_API}/restaurants/${id}/reviews`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEET_API}/restaurants/${id}/menu`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError)
  }
}
