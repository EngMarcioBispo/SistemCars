import { EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cars } from './car.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";



@Injectable({
  providedIn: 'root'
})
export class CarsService {

  baseUrl = "https://api-cars-new.herokuapp.com/cars";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  create(car: Cars ): Observable<Cars> {
    return this.http.post<Cars>(this.baseUrl, car).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable <any> {
    this.showMessage('Erro no processamento!', true)
    return EMPTY
  }

  read(): Observable<Cars[]>{
    return this.http.get<Cars[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string): Observable<Cars> {
    const url=`${this.baseUrl}/${id}`
    return this.http.get<Cars>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(car: Cars): Observable<Cars> {
    const url=`${this.baseUrl}/${car.id}`
    return this.http.put<Cars>(url, car).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: string): Observable<Cars> {
    const url=`${this.baseUrl}/${id}`
    return this.http.delete<Cars>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

}
