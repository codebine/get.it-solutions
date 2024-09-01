import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { FeatureComponent } from './feature/feature.component';
import { QuoteComponent } from './quote/quote.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home', pathMatch:'full'
    
  },
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Blog',component:BlogComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Detail',component:DetailComponent},
  {path:'Detail',component:DetailComponent},
  {path:'Feature',component:FeatureComponent},
  {path:'Quote',component:QuoteComponent},
  {path:'Service',component:ServiceComponent},
  {path:'Team',component:TeamComponent},
  {path:'Testimonial',component:TestimonialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
