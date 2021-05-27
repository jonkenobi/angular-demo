import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [	AppComponent,
      FooComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabsModule,
    MyMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
