import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './components/income/income.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { LoansComponent } from './components/loans/loans.component';
import { OutcomeComponent } from './components/outcome/outcome.component';

const routes: Routes = [
  { path: '', component: IncomeComponent },
  { path: 'outcome', component: OutcomeComponent },
  { path: 'loans', component: LoansComponent},
  { path: 'investments', component: InvestmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
