import { Component, OnInit } from '@angular/core';
import { ProductService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public gridData = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(){
    this._productService.getProducts()
    .subscribe(data => this.gridData = data);
  }
}
