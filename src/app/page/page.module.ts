import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class PageModule { }
