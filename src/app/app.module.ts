import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaturacaoComponent } from './faturacao/faturacao.component';
import { ModalCozinhaComponent } from './modals/modal-cozinha/modal-cozinha.component';
import { ModalConvivioComponent } from './modals/modal-convivio/modal-convivio.component';
import { ModalTransportesComponent } from './modals/modal-transportes/modal-transportes.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TransportesNovaFaturaComponent } from './modals/modalsNovaFatura/transportes-nova-fatura/transportes-nova-fatura.component';
import { DatePipe } from '@angular/common';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { CozinhaNovaFaturaComponent } from './modals/modalsNovaFatura/cozinha-nova-fatura/cozinha-nova-fatura.component';
import { ConvivioNovaFaturaComponent } from './modals/modalsNovaFatura/convivio-nova-fatura/convivio-nova-fatura.component';
import { ModalHigieneComponent } from './modals/modal-higiene/modal-higiene.component';
import { ModalLavandariaComponent } from './modals/modal-lavandaria/modal-lavandaria.component';
import { ModalServicoComunsComponent } from './modals/modal-servico-comuns/modal-servico-comuns.component';
import { ModalAdministrativosComponent } from './modals/modal-administrativos/modal-administrativos.component';
import { AdministrativosNovaFaturaComponent } from './modals/modalsNovaFatura/administrativos-nova-fatura/administrativos-nova-fatura.component';
import { HigieneNovaFaturaComponent } from './modals/modalsNovaFatura/higiene-nova-fatura/higiene-nova-fatura.component';
import { LavandariaNovaFaturaComponent } from './modals/modalsNovaFatura/lavandaria-nova-fatura/lavandaria-nova-fatura.component';
import { ServicoComunsNovaFaturaComponent } from './modals/modalsNovaFatura/servico-comuns-nova-fatura/servico-comuns-nova-fatura.component';
import { StockComponent } from './stock/stock.component';
import { ModalNovoProdutoComponent } from './modals/modal-novo-produto/modal-novo-produto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalRecursosHumanosComponent } from './modals/modal-recursos-humanos/modal-recursos-humanos.component';
import { RecursosHumanosNovaFaturaComponent } from './modals/modalsNovaFatura/recursos-humanos-nova-fatura/recursos-humanos-nova-fatura.component';
import { ModalViewComponent } from './modals/modal-view/modal-view.component';
import { AcessDeniedComponent } from './acess-denied/acess-denied.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FaturasComponent } from './faturas/faturas.component';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NotificationDialogComponent } from './modals/notifications/notification-dialog/notification-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FaturacaoComponent,
    ModalCozinhaComponent,
    ModalConvivioComponent,
    ModalTransportesComponent,
    TransportesNovaFaturaComponent,
    CozinhaNovaFaturaComponent,
    ConvivioNovaFaturaComponent,
    ModalHigieneComponent,
    ModalLavandariaComponent,
    ModalServicoComunsComponent,
    ModalAdministrativosComponent,
    AdministrativosNovaFaturaComponent,
    HigieneNovaFaturaComponent,
    LavandariaNovaFaturaComponent,
    ServicoComunsNovaFaturaComponent,
    StockComponent,
    ModalNovoProdutoComponent,
    NavbarComponent,
    ModalRecursosHumanosComponent,
    RecursosHumanosNovaFaturaComponent,
    ModalViewComponent,
    AcessDeniedComponent,
    FaturasComponent,
    NotificationDialogComponent,
  ],
  imports: [
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatSortModule,
    MatNativeDateModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    MatBadgeModule,
    MatButtonModule,
    MatSidenavModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    NgbModule,
    provideStorage(() => getStorage()),
  ],
  providers: [
    DatePipe,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
