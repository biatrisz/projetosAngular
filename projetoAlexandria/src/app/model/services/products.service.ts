import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    { id: 1, name: 'As meninas', price: 20, description:'Uma mistura de romance e comédia', image:'../book1.png'},
    {id: 2, name: 'Hiro Arikawa', price: 32, description:'receitas saudáveis', image:'../book2.png'}, 
    {id: 3, name: 'Audución', price: 20, description:'terror', image:'../book3.png'},
    {id: 4, name: 'Apsicanálise dos contos de fada', price: 60, description:'Gênero fictício', image:'../book4.png'},
    {id: 5, name: 'Hilda Furacão', price: 10, description:'Amor', image:'../book5.png'},
    {id: 6, name: 'Livro um', price: 40, description:'Livro científico', image:'../book6.png'},
    {id: 7, name: 'Livro dois', price: 35, description:'Gênero romance', image:'../book7.png'},
    {id: 8, name: 'Livro três', price: 66, description:'Livro de suspense', image:'book8.png'},
  ];
getProducts(): Iproducts[]{
  return this.products;
  
}
}
