import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GameComponent } from './game/game.component';
import { LobbyComponent } from './lobby/lobby.component';
import { TableComponent } from './table/table.component';
import { GameRouting } from './game.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GameRouting
  ],
  declarations: [GameComponent, LobbyComponent, TableComponent]
})
export class GameModule { }
