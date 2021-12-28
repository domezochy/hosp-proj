import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
  new Recipe('A test recipe','This is a sipmle test', 'http://www.polonist.com/wp-content/uploads/2020/11/fried-carp-1200sq.jpg'),
  new Recipe('A test recipe','This is a sipmle test', 'http://www.polonist.com/wp-content/uploads/2020/11/fried-carp-1200sq.jpg')
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
