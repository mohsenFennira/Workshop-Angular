import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  @Input() item:any;
  @Input() condition: any;
  @Output() public childEvent=new EventEmitter;
  eventChild(){
    this.childEvent.emit("");
  }
}
