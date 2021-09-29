import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {
  static handleError(err: Response| any) {
    let errorMessage: string;

    if (err instanceof Response)
      errorMessage = `Erro ${err.status} ao acessar a URL ${err.url} - ${err.statusText}`
    else
      errorMessage = err.toString();

    console.log(errorMessage);
    return Observable.throw(errorMessage);

  }
}
