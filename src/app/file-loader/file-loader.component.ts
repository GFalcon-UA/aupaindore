import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

import {ExcelService} from "../service/excel.service";
import {OrderItem} from "../model/order-item";
import {SimpleOrder} from "../model/simple-order";
import {ComplexOrder} from "../model/complex-order";
import {OrderService} from "../service/order.service";

@Component({
  selector: 'app-file-loader',
  templateUrl: './file-loader.component.html',
  styleUrls: ['./file-loader.component.css']
})
export class FileLoaderComponent {

  async handleDropAsync(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();
    const f = event?.dataTransfer?.files[0];
    if(!f){
      return;
    }

  }


  files: any[] = [];

  constructor(private excelService: ExcelService, private orderService: OrderService) {
  }

  // private fileDropEl: ElementRef;
  // constructor(@ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef) {
  //   this.fileDropEl = fileDropEl;
  // }

  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(target: any) {
    const files = target?.files;
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
  }

  @Output() orders = new EventEmitter<OrderItem[]>();

  simpleOrders: SimpleOrder[] = [];
  complexOrders: ComplexOrder[] = [];

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    const self = this;
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        this.excelService.parse(this.files[index]).then(value => {
          // self.orders.emit(value);
          self.orderService.prepareOrderList(value)
        });
      }
    }, 1000);
  }



  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    // this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  /*
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
   */
  getTitle(ord: ComplexOrder): string {
    return ord.orderNumber + " - " + ord.name
  }
}
