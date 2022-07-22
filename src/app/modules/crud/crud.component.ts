import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, delay } from 'rxjs';

import { MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { collectionInOut } from 'src/app/animation';
import { AppService } from 'src/app/app.service';
import { DeleteConfirmComponent } from '../shared/confirm-box/delete-confirm';
import { FormDialog } from './component/forms-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  templateUrl: './crud.component.html',
  animations: [collectionInOut],
})

export class CrudComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'phone', 'address', 'action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  private readonly toDestroy$ = new Subject<void>();

  @ViewChild(MatPaginator) paginator:  | any;

  constructor(
    private appService: AppService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.getAllListOfData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
     this.store.select(store => store.crud).subscribe(a => console.log(a, 'AA'))
  }

  getAllListOfData() {
    this.appService.GETALLLIST().pipe(
      takeUntil(this.toDestroy$), delay(800)
    ).subscribe(response => {
      this.dataSource.data = response;
    })
  }


  addNewDataInList(id: any) {
    const data = this.dataSource.data.find(data => data.position === id);
    let instance = this.dialog.open(FormDialog, {
      width: '40%',
      data: data ? data : null,
      autoFocus: false,
    });
    instance.afterClosed().pipe(delay(500)).subscribe(v => {
      let value = JSON.parse(JSON.stringify(v.data))

      let dataExists = this.dataSource.data.find(d => d.id === value.id);

      if(dataExists) {
        let index = this.dataSource.data.findIndex(i => i.id === value.id);
        this.dataSource.data[index] = value;
        this.dataSource._updateChangeSubscription();
      } else {
        this.dataSource.data.push(value);
        this.dataSource._updateChangeSubscription();
      }
      console.log(this.dataSource.data, 'SYNC...', v)

    })

  }

  deleteData(position: any) {
    this.dialog.open(DeleteConfirmComponent, { width: '40%' }).afterClosed().subscribe(_ => {
      if (_) {
        setTimeout(() => {
          let deleteIndex = this.dataSource.data.find(v => v.position === position);
          this.appService.deleteData(deleteIndex).subscribe(d => {
            this.dataSource.data.splice(deleteIndex, 1);
            this.dataSource._updateChangeSubscription();

            this.openSnackBar('Data Deleted Successfully!', 'Ok')
          })
        }, 800);
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
        duration: 2000,
        panelClass: ['success-snackbar'],
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
    });
}

  ngOnDestroy() {
    this.toDestroy$.next();
    this.toDestroy$.complete();
  }
}



