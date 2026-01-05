import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  products = [
    { name: 'Kathiyawadi Craft Frame', image: 'assets/images/img1.jpg' },
    { name: 'Hand Embroidery Hoop', image: 'assets/images/img2.jpg' },
    { name: 'Customized Name Hoop', image: 'assets/images/img3.jpg' },
    { name: 'Traditional Art Work', image: 'assets/images/img4.jpg' },
    { name: 'Home Decor Hoop', image: 'assets/images/img5.jpg' },
    { name: 'Wedding Embroidery', image: 'assets/images/img6.jpg' },
    { name: 'Couple Name Frame', image: 'assets/images/img7.jpg' },
    { name: 'Decorative Wall Art', image: 'assets/images/img8.jpg' },
    { name: 'Handmade Letter Art', image: 'assets/images/img9.jpg' },
    { name: 'Floral Initial Design', image: 'assets/images/img10.jpg' },
    { name: 'Customized Gift Frame', image: 'assets/images/img11.jpg' },
    { name: 'Festival Special Craft', image: 'assets/images/img12.jpg' }
  ];

}
