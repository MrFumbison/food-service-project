import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  @Input()
  foodpagetags?:string[]

  @Input()
  justifycontent:string = 'center';

  tags?:tag[];
  constructor(private foodservice:FoodService){}

  ngOnInit(): void {
    if(!this.foodpagetags)
    this.tags = this.foodservice.getalltags();
  }
}
