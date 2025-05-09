import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MemberComponent } from './member/member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { StartupsComponent } from './startup/startup.component';
import { EditStartupComponent } from './edit-startup/edit-startup.component';
import { AddStartupComponent } from './add-startup/add-startup.component';
import { InvestorComponent } from './investor/investor.component';
import { EditInvestorComponent } from './edit-investor/edit-investor.component';
import { AddInvestorComponent } from './add-investor/add-investor.component';
import { NewMemberComponent } from './new-member/new-member.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'member', component: MemberComponent },
  { path: 'edit-member/:id', component: EditMemberComponent },
  { path: 'startup', component: StartupsComponent },
  { path: 'edit-startup/:id', component: EditStartupComponent },
  { path: 'add-startup', component: AddStartupComponent },
  { path: 'investor', component: InvestorComponent },
  { path: 'edit-investor/:id', component: EditInvestorComponent },
  { path: "add-investor", component: AddInvestorComponent},
  { path: "newmember", component: NewMemberComponent},
  { path: '**', redirectTo: '' },
];
