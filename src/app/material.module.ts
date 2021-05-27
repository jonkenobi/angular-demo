import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  exports: [MatTabsModule, MatCardModule],
})
export class MyMaterialModule {}
