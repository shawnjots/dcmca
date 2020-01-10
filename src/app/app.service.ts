import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IProduct } from './Models/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    private _url = '/assets/data/products.json';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this._url);
    }
}
