import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule,
  MatCardModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatIconModule,
  MatExpansionModule, MatListModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { CadUsuarioComponent } from './pages/cadusuario/cadusuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadUsuarioComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule, MatFormFieldModule,
    MatCardModule, HttpClientModule,
    MatToolbarModule,
    MatSidenavModule, MatMenuModule, MatIconModule,
    MatExpansionModule, MatListModule, ,
    MatSnackBarModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
