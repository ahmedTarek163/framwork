import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'',redirectTo:"home" ,pathMatch:"full"},
    {path:'home',title:'home',component:HomeComponent},
    {path:'about',title:'about',component:AboutComponent},
    {path:'port',title:'port',component:PortfolioComponent},
    {path:'contact',title:'contact',component:ContactComponent}

    
];
