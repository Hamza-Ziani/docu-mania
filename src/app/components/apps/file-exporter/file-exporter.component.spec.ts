import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExporterComponent } from './file-exporter.component';

describe('FileExporterComponent', () => {
  let component: FileExporterComponent;
  let fixture: ComponentFixture<FileExporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileExporterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileExporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
