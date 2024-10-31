import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    { id: 1, name: 'Café', price: 5.0, description:'Um café quente e delicioso', image:'../cafe.png'},
    {id: 2, name: 'Suco de laranja', price: 7.5, description:'suco de laranja natural', image:'../suco.png'}, 
    {id: 3, name: 'Chá verde', price: 6.0, description:'chá saudável', image:'../cha.png'}
  ];
getProducts(): Iproducts[]{
  return this.products;
  
}
}
