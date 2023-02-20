import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css']
})
export class DetailsProductsComponent implements OnInit {
 id="noparam";
 constructor(private r:ActivatedRoute)
 {

 }
  ngOnInit(): void {
    this.id=this.r.snapshot.params['id'];
  }
}
