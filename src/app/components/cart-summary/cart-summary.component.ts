import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartItems:CartItem[]=[];
  constructor(private cartService:CartService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }
  getCart(){
    this.cartItems=this.cartService.list();
  }
  removeFromCart(car:Car){
    this.cartService.removeFromChart(car);
    this.toastrService.error("silindi. "+car.carName+ " ürün silindi.");
  }

}
