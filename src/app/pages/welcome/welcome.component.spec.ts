import { TestBed } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the welcome message', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('welcome works!');
  });
});
