import { SharedModule } from './core/shared/shared.module';
import { GlossaryModule } from './modules/glossary/glossary.module';

import { loreNodeEffect } from './store/loreNode/loreNode.effects';
import { loreNodeReducer, filterNodeReducer } from './store/loreNode/loreNode.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({ fullNodeCollection: loreNodeReducer, filteredNodeCollection: filterNodeReducer }),
    EffectsModule.forRoot([loreNodeEffect]),
    GlossaryModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
