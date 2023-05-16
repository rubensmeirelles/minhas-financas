import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends HttpBaseService {
  private endpoint = 'categorias';

  constructor(protected override readonly injector: Injector) { 
    super(injector)
  }

  getCategoria(): Observable<any>{
    return this.httpGet(this.endpoint);
  }

  getCategoriaId(id: number): Observable<any>{
    return this.httpGet(`${this.endpoint}/${id}`);
  }
}
