import {Component, Input} from '@angular/core';
import {ComplexOrder} from "../model/complex-order";

@Component({
  selector: 'app-three-salads-combo',
  templateUrl: './three-salads-combo.component.html',
  styleUrls: ['./three-salads-combo.component.css'],
  // standalone: true,
  // imports: [MatCardModule, MatDividerModule, MatButtonModule, MatListModule, NgForOf]
})
export class ThreeSaladsComboComponent {

  @Input()
  order: ComplexOrder|undefined = undefined;

  getBagNumber(): string {
    return this.order && this.order.orderNumber ? this.order.orderNumber : "";
  }

  getLabel(): string {
    return this.order && this.order.label ? this.order.label : "";
  }

  getName(): string {
    return this.order && this.order.name ? this.order.name : "";
  }

  getOptions() : string[] {
    if(this.order && this.order.items) {
      let arr : string[] = [];
      for (let i of this.order.items) {
        if (i && i.name) {
          let s:string;
          if(i.name.startsWith(this.getName())){
            s = i.name.substring((this.getName()+" [option]").length).trim();
          } else {
            s = i.name;
          }
          arr.push(s);
        }
      }
      return arr;
    }
    return [];
  }
}
