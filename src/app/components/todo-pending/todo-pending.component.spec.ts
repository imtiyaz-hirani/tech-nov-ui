import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPendingComponent } from './todo-pending.component';

describe('TodoPendingComponent', () => {
  let component: TodoPendingComponent;
  let fixture: ComponentFixture<TodoPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
