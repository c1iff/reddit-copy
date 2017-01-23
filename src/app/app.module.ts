import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { HotComponent } from './hot/hot.component';
import { RisingComponent } from './rising/rising.component';
import { ControversialComponent } from './controversial/controversial.component';
import { SortPipe } from './sort.pipe';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    HotComponent,
    RisingComponent,
    ControversialComponent,
    SortPipe,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
