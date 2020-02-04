import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ApplicationVar} from '../model/applicationVar';

import { ListComponent } from './list.component';
import {CategoryDef} from "../model/categoryDef";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display input', () => {
    const appVars = [
      {
        id: 'toto',
        categories: [],
      } as ApplicationVar
    ];
    component.params = appVars;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#list ul>li:first-of-type').textContent).toContain('toto');
  });
});
