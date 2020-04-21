# Progress Bar
  A progress bar can be used to show a user how far along he/she is in a process.
  The Bulma progress bar is a simple CSS class that styles the native ```<progress>``` HTML element.

To display a Progress component in your app and verify that everything works.
You need to import the BulmaModalModule that you want to display by adding the following lines to your app.module.ts file.

 ```typescript
import { BulmaProgressbarModule} from 'ngx-bulma'
  @NgModule({
    imports: [BulmaProgressbarModule]
  });
 ```
 ### Basic 
To use the Progressbar component in your Angular application.
Add ```buTextarea``` in textarea tag.