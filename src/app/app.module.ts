import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './components/filter/filter.component';
import { AdvertisementCardComponent } from './components/advertisement-card/advertisement-card.component';
import { AdvertisementFeedComponent } from './components/advertisement-feed/advertisement-feed.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdvertisementFormComponent } from './components/advertisement-form/advertisement-form.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdvertisementViewComponent } from './components/advertisement-view/advertisement-view.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    AdvertisementCardComponent,
    AdvertisementFeedComponent,
    SearchResultsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    PromotionsComponent,
    SocialMediaComponent,
    UserProfileComponent,
    AdvertisementFormComponent,
    LoginComponent,
    AboutUsComponent,
    AdvertisementViewComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
