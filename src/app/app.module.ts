import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { DevComponent } from './dev/dev.component';
import { InLineDevComponent } from './in-line-dev/in-line-dev.component';
import { SameFolderCompComponent } from './same-folder-comp.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    InLineDevComponent,
    SameFolderCompComponent,
    DataBindingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
