import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { LobbyComponent } from './lobby/lobby.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    {
        path: '',
        component: GameComponent,
        children: [
            { path: '', component: LobbyComponent },
            { path: 'table/:id', component: TableComponent },
            // { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GameRouting { }
