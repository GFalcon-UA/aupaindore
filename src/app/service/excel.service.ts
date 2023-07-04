import { Injectable } from '@angular/core';
import { read, utils } from 'xlsx';
import {OrderItem} from "../model/order-item";

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  private orders: OrderItem[] = [];

  async parse(f: File) {
    const data = await f.arrayBuffer();
    const workbook = read(data);

    const rows = utils.sheet_to_json<object>(workbook.Sheets['Orders']);
    let result: OrderItem[] = [];
    let lastEl: OrderItem = {};
    let rootItemName = "";
    for (let i = 0; i < rows.length; i++) {
      const entries = Object.entries(rows[i]);

      let el : OrderItem = {};
      el.hasOption = false;
      let isRoot : boolean = true;
      let findBugNumber: boolean = false;
      for(let j = 0; j < entries.length; j++) {
        const key = entries[j][0];
        const value = entries[j][1] ? entries[j][1] + "" : "";

        if(key === "Bag#") {
          el.bagNumber = value === "" ? lastEl.bagNumber : value;
          findBugNumber = true;
          if (value === '') {
            isRoot = false;
            el.isRoot = false;
          } else {
            el.isRoot = true;
          }
        }
        if(key === "Label") {
          el.label = value === "" ? lastEl.label : value;
        }
        if(key === "Category") {
          el.category = value === "" ? lastEl.category : value;
        }
        if(key === "Item") {
          if(value.trim().startsWith("[option]")) {
            el.item = (rootItemName + " " + value.trim()).trim();
            if(!lastEl.hasOption) {
              let ind = result.indexOf(lastEl);
              lastEl.hasOption = true;
              result[ind] = lastEl;
            }
          } else {
            el.item = value.trim();
            rootItemName = el.item;
          }
        }
        if(key === "Instructions") {
          el.instructions = value === "" ? lastEl.instructions : value.trim();
        }
        if(key === "Item Price") {
          el.itemPrice = Number(value);
        }
        if(key === "Cutlery") {
          el.cutlery = value === "" ? lastEl.cutlery : Boolean(value);
        }
      }

      if(!el.bagNumber) {
        el.isRoot = false;
        el.hasOption = false;
        el.bagNumber = lastEl.bagNumber;
      }
      if(!el.label) {
        el.label = lastEl.label;
      }
      if(!el.instructions) {
        el.instructions = lastEl.instructions;
      }
      if(!el.instructions) {
        el.instructions = lastEl.instructions;
      }
      if(!el.instructions) {
        el.instructions = lastEl.instructions;
      }

      if(isRoot) {
        lastEl = el;
      }
      result.push(el);
    }
    this.orders = result;
    return result;
  }

}
