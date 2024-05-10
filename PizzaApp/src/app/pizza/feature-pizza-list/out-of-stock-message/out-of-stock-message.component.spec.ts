import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfStockMessageComponent } from './out-of-stock-message.component';

describe('OutOfStockMessageComponent', () => {
  let component: OutOfStockMessageComponent;
  let fixture: ComponentFixture<OutOfStockMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutOfStockMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutOfStockMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
