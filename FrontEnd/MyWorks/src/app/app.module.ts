import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponentComponent } from './components/login-component/login-component.component' 
import {MatCardModule} from '@angular/material/card';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { SideNavComponentComponent } from './components/side-nav-component/side-nav-component.component';
import { WorkCardComponentComponent } from './components/work-card-component/work-card-component.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { FavoritesModalComponentComponent } from './components/favorites-modal-component/favorites-modal-component.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    ModalComponentComponent,
    MainComponentComponent,
    SideNavComponentComponent,
    WorkCardComponentComponent,
    FavoritesModalComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
