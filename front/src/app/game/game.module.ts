import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LobbyComponent } from './lobby/lobby.component';
import { TableComponent } from './table/table.component';
import { GameComponent } from './game/game.component';

import { GameRouting } from './game.routing';

@NgModule({
  imports: [
    CommonModule,
    GameRouting,
    FormsModule
  ],
  declarations: [LobbyComponent, TableComponent, GameComponent]
})
export class GameModule { }
