import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class DataService {
	abstract get<T>(url: string): Observable<T>;
	abstract post<T>(url: string, body): Observable<T>;
	abstract put<T>(url: string, body): Observable<T>;
	abstract delete<T>(url: string): Observable<T>;
}
