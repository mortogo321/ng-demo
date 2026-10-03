import { TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the employee placeholder', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('employee works!');
  });
});
