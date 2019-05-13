import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-king',
  templateUrl: './king.component.html',
  styleUrls: ['./king.component.css']
})
export class KingComponent implements OnInit {

  @Input() name: string;
  @Input() label: string;




  constructor() {
  }

  ngOnInit() {
    console.log(this.name, this.label);
  }

}
