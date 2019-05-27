import { Injectable } from '@angular/core';
import { Product } from 'src/_models/product';
import { Observable, of, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    products: Product[];
    constructor() {
        this.products = [
            {
                id: 1,
                name: 'Zaam-Dox',
                category: 'bras',
                description: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
                collection: 'Musky Phlox',
                price: 84.42,
                imageUrl: 'assets/img/card/2.jpg',
                liked: false,
                sale: true
            },
            {
                id: 2,
                name: 'Duobam',
                category: 'bras',
                description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
                collection: 'Runyons Water-willow',
                price: 121.26,
                imageUrl: 'assets/img/card/3.jpeg',
                liked: false,
                sale: true
            },
            {
                id: 3,
                name: 'Tin',
                category: 'bras',
                description: 'Curabitur gravida nisi at nibh. ',
                collection: 'Sharp Blazing Star',
                price: 197.27,
                imageUrl: 'assets/img/card/3.jpeg',
                liked: false,
                sale: false
            },
            {
                id: 4,
                name: 'Konklux',
                category: 'panties',
                description: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
                collection: 'Hyssopleaf Sandmat',
                price: 252.26,
                imageUrl: 'assets/img/card/1.jpg',
                liked: false,
                sale: true
            },
            {
                id: 5,
                name: 'Ventosanzap',
                category: 'panties',
                description: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
                collection: 'Sachsia',
                price: 272.26,
                imageUrl: 'assets/img/card/6.jpeg',
                liked: false,
                sale: false
            },
            {
                id: 6,
                name: 'Job',
                category: 'panties',
                description: 'Sed sagittis. Nam congue, risus semper porta volutpat,',
                collection: 'Cuban Nutrush',
                price: 218.37,
                imageUrl: 'assets/img/card/5.jpg',
                liked: false,
                sale: false
            },
            {
                id: 7,
                name: 'Daltfresh',
                category: 'lingerie',
                description: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
                collection: 'Stenocybe Lichen',
                price: 256.83,
                imageUrl: 'assets/img/card/4.jpg',
                liked: false,
                sale: false
            },
            {
                id: 8,
                name: 'Gembucket',
                category: 'lingerie',
                description: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
                collection: 'Currant Tomato',
                price: 177.96,
                imageUrl: 'assets/img/card/2.jpg',
                liked: false,
                sale: false
            },
            {
                id: 9,
                name: 'Rank',
                category: 'lingerie',
                description: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
                collection: 'Shortleaf Lobelia',
                price: 239.4,
                imageUrl: 'assets/img/card/4.jpg',
                liked: false,
                sale: false
            },
            {
                id: 10,
                name: 'Stringtough',
                category: 'lingerie',
                description: 'Aenean fermentum. Donec ut mafend luctus, ultricies eu, nibh.',
                collection: 'Suksdorfs Indian Paintbrush',
                price: 235.49,
                imageUrl: 'assets/img/card/7.jpg',
                liked: false,
                sale: false
            }
        ];
    }

    getProducts() {
        return this.products;
    }

    getProduct(id: number) {
        const product = this.products[this.getProductIndex(id)];
        return product;
    }

    getProductIndex(id: number) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return i;
            }
        }

        return -1;
    }

    getProductsByCategory(category: string) {
        const prod = this.products.filter(p => p.category === category);
        return prod;
    }

    getProductsBySale() {
        const prod = this.products.filter(p => p.sale === true);
        return prod;
    }

    getLoveList(): Observable<Product[]> {
        const prod = this.products.filter(p => p.liked === true);
        return of<Product[]>(prod);
    }
}
