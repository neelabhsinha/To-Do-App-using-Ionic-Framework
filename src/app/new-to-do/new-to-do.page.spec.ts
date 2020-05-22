import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewToDoPage } from './new-to-do.page';

describe('NewToDoPage', () => {
  let component: NewToDoPage;
  let fixture: ComponentFixture<NewToDoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewToDoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
