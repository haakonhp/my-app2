import { LitElement, html, css, customElement } from 'lit-element';
import '@vaadin/button/src/vaadin-button.js';
import '@vaadin/grid/src/vaadin-grid.js';
import '@vaadin/grid/src/vaadin-grid-column.js';
import '@vaadin/grid/src/vaadin-grid-column-group.js';

@customElement('chris-view')
export class ChrisView extends LitElement {
  static get styles() {
    return css`
      :host {
          display: block;
          height: 100%;
      }
      `;
  }

  render() {
    return html`
<vaadin-button>
  Button 
</vaadin-button>
<vaadin-grid items="[[items]]">
 <vaadin-grid-column width="50px" flex-grow="0">
  <template class="header">
    # 
  </template>
  <template>
    [[index]] 
  </template>
  <template class="footer">
    # 
  </template>
 </vaadin-grid-column>
 <vaadin-grid-column-group>
  <template class="header">
    Group header 1 
  </template>
  <vaadin-grid-column>
   <template class="header">
     Value1 
   </template>
   <template>
     [[item.value1]] 
   </template>
   <template class="footer">
     Value1 
   </template>
  </vaadin-grid-column>
  <vaadin-grid-column>
   <template class="header">
     Value2 
   </template>
   <template>
     [[item.value2]] 
   </template>
   <template class="footer">
     Value2 
   </template>
  </vaadin-grid-column>
 </vaadin-grid-column-group>
 <vaadin-grid-column-group>
  <template class="header">
    Group header 2 
  </template>
  <vaadin-grid-column>
   <template class="header">
     Value3 
   </template>
   <template>
     [[item.value3]] 
   </template>
   <template class="footer">
     Value3 
   </template>
  </vaadin-grid-column>
  <vaadin-grid-column>
   <template class="header">
     Value4 
   </template>
   <template>
     [[item.value4]] 
   </template>
   <template class="footer">
     Value4 
   </template>
  </vaadin-grid-column>
 </vaadin-grid-column-group>
</vaadin-grid>
`;
  }

  // Remove this method to render the contents of this view inside Shadow DOM
  createRenderRoot() {
    return this;
  }
}
