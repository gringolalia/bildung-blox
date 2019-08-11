import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@blox/material';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HolderinComponent } from './holderin/holderin.component';
import { GoetheComponent } from './goethe/goethe.component';
import { HeineComponent } from './heine/heine.component';
import { BrechtComponent } from './brecht/brecht.component';
import { SchillerComponent } from './schiller/schiller.component';
import { HesseComponent } from './hesse/hesse.component';
import { KleistComponent } from './kleist/kleist.component';
import { RilkeComponent } from './rilke/rilke.component';
import { GeorgeComponent } from './george/george.component';
import { NovalisComponent } from './novalis/novalis.component';
import { SilesiusComponent } from './silesius/silesius.component';
import { NavigierenComponent } from './navigieren/navigieren.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AlTanaqqalComponent } from './al-tanaqqal/al-tanaqqal.component';
import { EspaconaveComponent } from './espaconave/espaconave.component';

// We Are Routing Your Call
const appRoutes: Routes = [
  { path: '', component: GoetheComponent },
  { path: 'silesius', component: SilesiusComponent },
  { path: 'novalis', component: NovalisComponent },
  {  path: 'brecht', component: BrechtComponent },
  {  path: 'george', component: GeorgeComponent },
  {  path: 'heine', component: HeineComponent },
  {  path: 'hesse', component: HesseComponent },
  {  path: 'holderin', component: HolderinComponent },
  {  path: 'kleist', component: KleistComponent },
  {  path: 'novalis', component: NovalisComponent },
  {  path: 'rilke', component: RilkeComponent },
  {  path: 'silesius', component: SilesiusComponent },
  {  path: 'schiller', component: SchillerComponent }
    // { path: '',
    //   redirectTo: '/',
    //   pathMatch: 'full'
    // },
    // { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HolderinComponent,
    GoetheComponent,
    HeineComponent,
    BrechtComponent,
    SchillerComponent,
    HesseComponent,
    KleistComponent,
    RilkeComponent,
    GeorgeComponent,
    NovalisComponent,
    SilesiusComponent,
    NavigierenComponent,
    AlTanaqqalComponent,
    EspaconaveComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
