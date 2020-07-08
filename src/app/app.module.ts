import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { CreateAppareilComponent } from './create-appareil/create-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';

const AppRoutes: Routes = [
  {path:'appareils', component: AppareilViewComponent},
  {path:'create', component: CreateAppareilComponent},
  {path:'', component: AppareilViewComponent},
  {path:'not-found', component: FourOhFourComponent},
  {path:'**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    CreateAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
