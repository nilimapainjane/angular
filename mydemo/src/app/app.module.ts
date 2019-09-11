import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {coursecomponent} from './courses.component';

import {buttoncomponent} from './Button.component';
import { taskcomponent } from './task.component';
import { parentcomponent } from './parent.component';
import { childcomponent } from './child.component';
import { dropdowncomponent } from './drowdown.component';
import { pipecomponent } from './pipe.component';
import { contentPipe } from './content.pipes';
import { CustomDirective } from './custom.directives';
import { productcomponent } from './product.component';
import { TVcomponent } from './TV.component';
import { ACcomponent } from './AC.component';
import { mobcomponent } from './mob.component';
import { laptopcomponent } from './laptop.component';
import { TemplateformComponent } from './templateform/templateform.component';
import {FormsModule} from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import{RouterModule} from '@angular/router'
import { routes } from './app.routes';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    coursecomponent,
    buttoncomponent,
    taskcomponent,
    parentcomponent,
    childcomponent,
    dropdowncomponent,
    pipecomponent,
    contentPipe,
    CustomDirective,
    productcomponent,
    TVcomponent,
    ACcomponent,
    mobcomponent,
    laptopcomponent,
    TemplateformComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    About1Component,
    About2Component,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
