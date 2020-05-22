import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewToDoPage } from './view-to-do.page';

describe('ViewToDoPage', () => {
  let component: ViewToDoPage;
  let fixture: ComponentFixture<ViewToDoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewToDoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
