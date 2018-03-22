import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './lobby/lobby.component';
import { TableComponent } from './table/table.component';
import { GameComponent } from './game/game.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LobbyComponent, TableComponent, GameComponent]
})
export class GameModule { }
