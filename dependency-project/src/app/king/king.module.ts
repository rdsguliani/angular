import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {KingRoutingModule} from './king-routing.module';
import { KingComponent } from "./king.component";


@NgModule({
    imports:[
        CommonModule,
        KingRoutingModule
    ],
    declarations:[KingComponent],
    exports: [ KingComponent ]
})

export class KingModule{}