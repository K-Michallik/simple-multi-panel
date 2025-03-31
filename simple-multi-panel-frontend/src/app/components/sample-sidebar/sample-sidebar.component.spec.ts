import {ComponentFixture, TestBed} from '@angular/core/testing';
import { SampleSidebarComponent } from "./sample-sidebar.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable, of} from "rxjs";

describe('SampleSidebarComponent', () => {
  let fixture: ComponentFixture<SampleSidebarComponent>;
  let component: SampleSidebarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleSidebarComponent],
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

    fixture = TestBed.createComponent(SampleSidebarComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
