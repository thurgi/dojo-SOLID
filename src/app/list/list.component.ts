import { Component, Input, OnInit } from '@angular/core';
import { ApplicationVar } from '../model/applicationVar';
import { CategoryVar } from '../model/categoryVar';
import { Section } from '../model/section';
import { Variable } from '../model/variable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() applicationVars: ApplicationVar[];

  constructor() {
  }

  ngOnInit() {
  }

  public getCategories(application: ApplicationVar): CategoryVar[] {
    return application.categories || [];
  }

  public getSections(category: CategoryVar): Section[] {
    return category.sections || [];
  }

  public getVariables(section: Section): Variable[] {
    return section.variables || [];
  }


}
