import { DialogueAjouterEmployeComponent } from './../dialogue-ajouter-employe/dialogue-ajouter-employe.component';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface listeEmployes {
  ID:string;
  FirstName:string;
  LastName:string;
}
let ELEMENT_DATA: listeEmployes[] = [
];
@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  displayedColumns: string[] = ['ID','LastName', 'FirstName','Action'];
  dataSource:any
  data:any
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public dialog: MatDialog) { }

  AfficherEmploye(){
    ELEMENT_DATA =   [{ID: "k4541", LastName: 'jebbour', FirstName: 'hamza'},
    {ID: "11de1", LastName: 'moudni', FirstName: 'alae'},
    {ID: "w88kw", LastName: 'bakkali', FirstName: 'said'},
    {ID: "s5555", LastName: 'jebbour', FirstName: 'rachid'},
  ];

    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
  openDialog() {
    let dialogRef=this.dialog.open(DialogueAjouterEmployeComponent);
    dialogRef.afterClosed().subscribe(() => { this.AfficherEmploye(); } );
  }
 deleteProduit(id:any){

}

updateProduit(produit:any){


}

  ngOnInit(): void {
    this.AfficherEmploye();
  }

}
