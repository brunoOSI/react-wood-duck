import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Table from '../../src/Table';

const CenterDecorator = storyFn => <div className="container">{storyFn()}</div>;
const TableStory = withInfo(
  `
    #### Usage
      - Use when users need to compare, manipulate or sort data
      
      - Use when presenting multiple information points for a 
      large number of items
      
      - Use if bulk actions are needed (Checkboxes -> Delete all, 
        Assign all)
      
      - Use if there are at least three or more columns of data
      
      - Other considerations:
      
        - Right align numeric columns, left-alight text columns, 
        headers should be aligned with their data (scan-ability)
      
        - Place the most important columns on the left most part 
        of the table

    #### Accessibility
      - Simple tables can have two levels of headers. Each header 
      cell should have scope="col" or scope="row".
    
      - Complex tables are tables with more than two levels of 
      headers. Each header should be given a unique id and each 
      data cell should have a headers attribute with each related 
      header cell’s id listed.
    
      - When adding a title to a table, include it in a <caption> 
      tag inside of the <table> element.
  `
)(() => <Table />);

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('Table', TableStory);
