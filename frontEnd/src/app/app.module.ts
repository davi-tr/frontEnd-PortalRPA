import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CadastroButtonComponent } from './components/cadastro-button/cadastro-button.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ItensComponent } from './components/itens/itens.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CadastroButtonComponent,
    SearchBarComponent,
    ItensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
