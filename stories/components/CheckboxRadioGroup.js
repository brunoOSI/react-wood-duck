import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import CheckboxRadioGroup from '../../src/CheckboxRadioGroup';

const styles = { paddingTop: '20px', width: '750px' };
const CenterDecorator = storyFn => (
  <div className="container" style={styles}>
    {storyFn()}
  </div>
);
let data = ['Sojourner Truth', 'Frederick Douglass', 'Booker T. Washington'];

const CheckboxRadioGroupStory = withInfo(
  `
    #### CheckboxRadioGroup Variations
      - Checkbox

      - Radio

    #### Checkbox
      ---
    #### Usage
      - Use when there are lists of options and the user may select 
      any number of choices, including zero, one, or several.
      
      - Use a stand-alone checkbox for a single option that a user 
      can turn on or off.
      
      - Use for an optional selection (or add on).
      
      - Use positive and active warning so that it is clear what 
      will happen if the user turns on the checkbox.
      
      - Example: Send me emails every week.
      
      - Do not use if there are an overwhelming number of 
      options – consider a multi-select dropdown in that case.
      
    #### Accessibility
      - Surround a related set of checkboxes with a <fieldset>. 
      The <legend> provides context for the grouping. 
      Do not use fieldset and legend for a single check.
      
      - The custom checkboxes here are accessible to screen 
      readers because the default checkboxes are moved off-screen 
      with position: absolute; left: -999em.
    
      - Each input should have a semantic id attribute, and 
      its corresponding label should have the same value in it’s 
      for attribute.
      
      - The title attribute can replace <label>.

    #### Radio
      ---
    #### Usage
      - Use when there is a list of two or more options that 
      are mutually exclusive and the user must select exactly 
      one choice.
    
      - Use if a user needs to see all of the options at once 
      (comparing, for example).
    
      - Use if you have an option that can be turned on or off 
      but whose two different states would be difficult to explain 
      with a toggle or checkbox.
    
        - Example:
    
          - Don't Log me out automatically.
          
          - Log me out after 15 minutes of inactivity.
      
      - Use with a default selection whenever possible.
    
      - Do not use if there are more than 7 options.    

      #### Accessibility

      - Group related radio buttons together with <fieldset> and describe the group with <legend>.

      - Each radio button should have a <label>. Associate the two by matching the<label>’s for attribute to the <input> ’s id attribute.
      
      - The title attribute can replace <label>.
  `
)(() => (
  <div>
    <CheckboxRadioGroup
      label="Characters"
      type={'checkbox'}
      name="Category"
      options={data}
      selectedOptions={[]}
      handleOnChange={e => this.setSate({ value: e.target.value })}
    />
    <CheckboxRadioGroup
      label="Characters"
      type={'radio'}
      name="Category"
      options={data}
      selectedOptions={[]}
      handleOnChange={e => this.setSate({ value: e.target.value })}
    />
  </div>
));

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('CheckboxRadioGroup', CheckboxRadioGroupStory);
