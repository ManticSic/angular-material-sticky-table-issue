import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProtectedComponent } from './components/protected/protected.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListComponent } from './components/list/list.component';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';
import { TableComponent } from './components/table/table/table.component';
import { TableBodyComponent } from './components/table/table-body/table-body.component';
import { TableCellComponent } from './components/table/table-cell/table-cell.component';
import { TableHeaderComponent } from './components/table/table-header/table-header.component';
import { TableRowComponent } from './components/table/table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    NavigationComponent,
    ListComponent,
    TableComponent,
    TableBodyComponent,
    TableCellComponent,
    TableHeaderComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
