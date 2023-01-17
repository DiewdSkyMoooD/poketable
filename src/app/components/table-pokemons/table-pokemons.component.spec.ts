import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePokemonsComponent } from './table-pokemons.component';

describe('TablePokemonsComponent', () => {
  let component: TablePokemonsComponent;
  let fixture: ComponentFixture<TablePokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePokemonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
