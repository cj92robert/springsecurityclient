import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TestComponent} from './controllers/test/test.component';
import {MenuComponent} from './controllers/menu/menu.component';
import {HttpIntercepterService} from './services/http-intercepter.service';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from './controllers/footer/footer.component';
import {StartComponent} from './controllers/start/start.component';
import {AdminComponent} from './controllers/admin/admin.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {PaginatorModule, PanelModule, PasswordModule, ToastModule} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {IndexComponent} from './components/index/index.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {TermsComponent} from './components/terms/terms.component';
import {ContactComponent} from './components/contact/contact.component';
import {ActivateUserComponent} from './components/activate-user/activate-user.component';
import {ActivateMailComponent} from './components/activate-mail/activate-mail.component';

const routes: Routes = [
  {path: '', redirectTo: 'index.html', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'index.html', component: IndexComponent},
  {path: 'remindpassword', component: ForgotPasswordComponent},
  {path: 'terms&conditions', component: TermsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: NotFoundPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MenuComponent,
    FooterComponent,
    StartComponent,
    AdminComponent,
    NotFoundPageComponent,
    IndexComponent,
    ForgotPasswordComponent,
    TermsComponent,
    ContactComponent,
    ActivateUserComponent,
    ActivateMailComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastModule,
    BrowserModule,
    BrowserAnimationsModule,
    PasswordModule,
    PaginatorModule,
    PanelModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
