import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/Components/app.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(HttpClientModule), // Provide HttpClientModule
    // ... other providers ...
  ]
})
  .catch((err) => console.error(err));
