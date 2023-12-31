import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionGroupComponent } from './components/accordion/accordion-group/accordion-group.component';
import { AccordionItemComponent } from './components/accordion/accordion-item/accordion-item.component';

@NgModule({
  declarations: [AppComponent, AccordionGroupComponent, AccordionItemComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
