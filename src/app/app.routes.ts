import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { RestListComponent } from './components/rest-list/rest-list.component';


export const routes: Routes = [
    { path : '' , component : AccueilComponent },
    { path : 'allproducts' , component : AllproductsComponent},
    { path: 'hotel-list', component: HotelListComponent },
    {path : 'rest-list', component : RestListComponent}
    
    
];
