import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDataComponent } from './recipe-data.component';

describe('RecipeDataComponent', () => {
  let component: RecipeDataComponent;
  let fixture: ComponentFixture<RecipeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
