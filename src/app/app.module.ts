import { NgModule } from 'ng-metadata/core';
import { AppComponent } from './app.component';
import {MariusDetailsModule} from "../details/details.module";
import {MariusListModule} from "../list/list.module";

@NgModule( {
    imports: [MariusListModule, MariusDetailsModule],
    declarations: [
        AppComponent
    ]
} )
export class AppModule {
}
