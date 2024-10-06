import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule
 
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
