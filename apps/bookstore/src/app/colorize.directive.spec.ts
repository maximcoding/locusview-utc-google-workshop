import {ColorizeDirective} from './colorize.directive';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component, DebugElement, ElementRef, Renderer2} from "@angular/core";
import {By} from "@angular/platform-browser";

@Component({
  template: '<div colorize changeColor="yellow"></div>' +
    '<div></div>'
})
class TestComponent {
}

describe('ColorizeDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement;

  const elementRef = {
    nativeElement: {}
  } as any;

  const renderer2 = {
    setStyle: jest.fn()
  } as any;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorizeDirective, TestComponent],
      providers: [{
        provide: ElementRef,
        useValue: elementRef,
      }, {
        provide: Renderer2,
        useValue: renderer2
      }],
    }).compileComponents();

    // elementRef = TestBed.inject(ElementRef);
    // renderer2 = TestBed.inject(Renderer2);
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create the instance', () => {
    const directive = new ColorizeDirective(elementRef, renderer2);
    expect(directive).toBeTruthy();
  });

  it('should change color if directive exist', () => {
    const element = debugElement.query((By.directive(ColorizeDirective)));
    expect(element).toBeTruthy();
    expect(element.nativeElement.style.backgroundColor).toEqual('yellow');
  });

  it('should check ngAfterViewInit() changed the color', () => {
    const spyOnRenderer = jest.spyOn(renderer2, 'setStyle');
    const directive = new ColorizeDirective(elementRef, renderer2);
    directive.ngAfterViewInit();
    expect(spyOnRenderer).toHaveBeenCalledTimes(1);
  });

});
