import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private refreshTableSubject = new Subject<void>();
  public invokeRefresh$ = this.refreshTableSubject.asObservable();

  refreshTable(): void {
    this.refreshTableSubject.next();
  }
}
