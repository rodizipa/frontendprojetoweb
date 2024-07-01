import { DataView, DataViewLayoutOptions } from 'primereact/dataview';

export function orderList() {
  <DataView value={this.state.product} layout={'list'} itemTemplate={this.itemTemplate}/>
}