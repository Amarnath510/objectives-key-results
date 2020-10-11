import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { OkrsService } from './services/okrs.service';
import { HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ObjectivesComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ OkrsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
