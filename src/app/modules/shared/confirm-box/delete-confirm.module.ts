import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DeleteConfirmComponent } from './delete-confirm';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [DeleteConfirmComponent],
    imports: [CommonModule, MatDialogModule, MatTooltipModule,MatToolbarModule, MatButtonModule,MatProgressSpinnerModule],
    exports: [DeleteConfirmComponent],
    entryComponents: [DeleteConfirmComponent]
})
export class DeleteConfirmModule { }
