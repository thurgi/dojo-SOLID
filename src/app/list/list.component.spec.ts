import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationVar } from '../model/applicationVar';

import { ListComponent } from './list.component';
import { CategoryDef } from '../model/categoryDef';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ListComponent]
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

  it('should display mocked params', () => {
    const fakeApp1 = 'fakeApp1';
    const fakeApp2 = 'fakeApp2';
    const fakeCat1 = 'fakeCat1';
    const fakeCat2 = 'fakeCat2';
    const appVars = [
      {
        id: fakeApp1,
        categories: [
          {
            label: `${fakeApp1} - ${fakeCat1}`
          },
          {
            label: `${fakeApp1} - ${fakeCat2}`
          },
        ],
      } as ApplicationVar,
      {
        id: fakeApp2,
        categories: [
          {
            label: `${fakeApp2} - ${fakeCat1}`
          },
        ],
      } as ApplicationVar,
    ];
    component.applicationVars = appVars;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#list>ul>li:first-of-type').textContent).toContain(fakeApp1);
    expect(compiled.querySelector('#list>ul>li:nth-of-type(2)').textContent).toContain(fakeApp2);
    expect(compiled.querySelector('#list>ul>li:first-of-type>ul>li:first-of-type').textContent).toContain(`${fakeApp1} - ${fakeCat1}`);
    expect(compiled.querySelector('#list>ul>li:first-of-type>ul>li:nth-of-type(2)').textContent).toContain(`${fakeApp1} - ${fakeCat2}`);
    expect(compiled.querySelector('#list>ul>li:nth-of-type(2)').textContent).toContain(fakeApp2);
    expect(compiled.querySelector('#list>ul>li:nth-of-type(2)>ul>li:first-of-type').textContent).toContain(`${fakeApp2} - ${fakeCat1}`);
  });
});
