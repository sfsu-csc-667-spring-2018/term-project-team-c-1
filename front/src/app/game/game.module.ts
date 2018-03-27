import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxAutoScrollModule} from 'ngx-auto-scroll';

import { GameComponent } from './game/game.component';
import { LobbyComponent } from './lobby/lobby.component';
import { TableComponent } from './table/table.component';
import { GameRouting } from './game.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GameRouting,
    NgxAutoScrollModule
  ],
  declarations: [GameComponent, LobbyComponent, TableComponent]
})
export class GameModule { }
