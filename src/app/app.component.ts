import { Component } from '@angular/core';
import { GetDataService } from './service/getDataService'
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatTableDataSource, MatSortHeader} from '@angular/material';
  import {SelectionModel} from '@angular/cdk/collections';

export interface Data{
  ticket: string,
  desc:string
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  displayedColumns:string[] = ['select','ticket','desc'];
  dataSource:  MatTableDataSource<Data>;
  selection= new SelectionModel<Data>(true,[]);

  

  constructor(private getData : GetDataService){}

  onSubmit(){
    this.getData.service().subscribe(res=>{
      if(res)
      {
        this.dataSource = new MatTableDataSource(res);        
      }
    })
  }

  isAllSelected(){
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  

  masterToggle(){
    this.isAllSelected() ?
      this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
    
  }

  checkboxLabel(row?: Data): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ticket + 1}`;
  }
}
