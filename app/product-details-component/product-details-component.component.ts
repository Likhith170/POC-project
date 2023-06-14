import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details-component',
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.css']
})
export class ProductDetailsComponentComponent implements OnInit {
  productId: string;
  product: any;
  product1:any;
  constructor(private route: ActivatedRoute, private apiService: ApiService,private router:Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.fetchProductDetails(this.productId);
    });
  }

  fetchProductDetails(productId: string): void {
    this.apiService.getBagDetailsById(productId).subscribe(
      (productDetails: any) => {
        this.product = productDetails;
        console.log(productDetails);
      },
      (error: any) => {
        console.error('Error fetching product details:', error);
      }
    );
    this.apiService.getBagDetailsById1(productId).subscribe(
      (productDetails: any) => {
        this.product = productDetails;
        console.log(productDetails);
      },

      (error: any) => {
        console.error('Error fetching product details :', error);
      }
    );
    
    this.apiService.getBagDetailsById2(productId).subscribe(
      (productDetails: any) => {
        this.product = productDetails;
      },
      (error: any) => {
        console.error('Error fetching product details :', error);
      }
    );

    this.apiService.getBagDetailsById2(productId).subscribe(
      (productDetails: any) => {
        this.product = productDetails;
      },
      (error: any) => {
        console.error('Error fetching product details :', error);
      }
    );
    this.apiService.getBagDetailsById3(productId).subscribe(
      (productDetails: any) => {
        this.product = productDetails;
      },
      (error: any) => {
        console.error('Error fetching product details :', error);
      }
    );
  }
  goBack(): void {
    this.router.navigate(['/products']);
    window.scrollTo(0, 0);
  }
}
