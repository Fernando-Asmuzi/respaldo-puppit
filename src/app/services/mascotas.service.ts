import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const cudOptions = {
    headers: new HttpHeaders ({'Content-Type':'application/json'}), 
}

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private urlBase = environment.url_servicios_base;
  private apiPostMascotas = this.urlBase + '/puppitdb/mascotas'
  
  constructor(public http: HttpClient) {}

    postMascotas(mascota: any): Observable<any> {
       const newSession = Object.assign({}, mascota);
       return this.http.put<any[]>(this.apiPostMascotas, newSession, cudOptions)
   }
}
