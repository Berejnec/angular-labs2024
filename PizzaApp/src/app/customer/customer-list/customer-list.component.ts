import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ICustomer} from "../customer.model";
import {NavigationService} from "../../commons/navigation.service";
import {CustomerFileService} from "../customer.service";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatMiniFabButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatSort,
    MatMiniFabButton,
    MatHeaderRow,
    MatRow,
    MatIcon,
    MatRowDef,
    MatHeaderRowDef,
    MatPaginator,
    MatSortHeader
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'city', 'country', 'actions'];
  dataSource: MatTableDataSource<ICustomer> = new MatTableDataSource<ICustomer>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private navigationService: NavigationService,
              private customerService: CustomerFileService) {
  }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(customers => this.dataSource = new MatTableDataSource<ICustomer>(customers));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goToCustomer(customer: ICustomer): Promise<boolean> {
    return this.navigationService.openCustomer(customer._id);
  }
}
