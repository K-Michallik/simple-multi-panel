import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SimpleMultiPanelComponent} from "./simple-multi-panel.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable, of} from "rxjs";

describe('SimpleMultiPanelComponent', () => {
  let fixture: ComponentFixture<SimpleMultiPanelComponent>;
  let component: SimpleMultiPanelComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleMultiPanelComponent],
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader, useValue: {
            getTranslation(): Observable<Record<string, string>> {
              return of({});
            }
          }
        }
      })],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleMultiPanelComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
