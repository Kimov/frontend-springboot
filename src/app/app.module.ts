import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ColorPickerModule} from 'ngx-color-picker';
import {TASK_URL_TOKEN} from './data/dao/impl/TaskService';
import {CATEGORY_URL_TOKEN} from './data/dao/impl/CategoryService';
import {PRIORITY_URL_TOKEN} from './data/dao/impl/PriorityService';
import {STAT_URL_TOKEN} from './data/dao/impl/StatService';
import {SidebarModule} from 'ng-sidebar';
import {DeviceDetectorModule} from 'ngx-device-detector';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ColorPickerModule,
    SidebarModule,
    DeviceDetectorModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {
      provide: TASK_URL_TOKEN,
      useValue: 'http://localhost:8080/task'
    },

    {
      provide: CATEGORY_URL_TOKEN,
      useValue: 'http://localhost:8080/category'
    },


    {
      provide: PRIORITY_URL_TOKEN,
      useValue: 'http://localhost:8080/priority'
    },


    {
      provide: STAT_URL_TOKEN,
      useValue: 'http://localhost:8080/stat'
    },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
