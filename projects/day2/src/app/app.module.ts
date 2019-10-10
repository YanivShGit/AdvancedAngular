import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { PanelComponent } from './panel/panel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ExpenderComponent } from './expender/expender.component';
import { DropDownComponent } from './drop-down/drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    PanelComponent,
    AccordionComponent,
    ExpenderComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
