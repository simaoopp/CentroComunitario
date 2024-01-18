import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaturacaoComponent } from './faturacao/faturacao.component';
import { StockComponent } from './stock/stock.component';
import { AuthGuard } from './guard/auth.guard';
import { AcessDeniedComponent } from './acess-denied/acess-denied.component';
import { FaturasComponent } from './faturas/faturas.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'faturacao', component: FaturacaoComponent, canActivate: [AuthGuard]},
  {path: 'faturas', component: FaturasComponent, canActivate: [AuthGuard]},
  {path: 'stock', component: StockComponent, canActivate: [AuthGuard]},
  {path: 'acessdenied', component: AcessDeniedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
