import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AsideComponent,
    BreadcrumsComponent,
    HeaderComponent
  ],
  exports: [
    AsideComponent,
    BreadcrumsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})

export class SharedModule { }
