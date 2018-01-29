import { UsersRoutingModule } from './users-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
@NgModule({
    declarations: [UsersComponent],
    imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {

}