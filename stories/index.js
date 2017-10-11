import React from 'react';

import { storiesOf } from '@storybook/react';

import About from './About';
import Accessibility from './Accessibility';
import Colors from './Colors';
import SideNav from './SideNav';
import NavLink_Story from './NavLink';
import NavLinks_Story from './NavLinks';
//Components
import Alert from '../src/Alert';
import Button from '../src/Button';
import Cards from '../src/Cards';
import CheckboxRadioGroup from '../src/CheckboxRadioGroup';
import DatePicker from '../src/DatePicker';
import DateTimePicker from '../src/DateTimePicker';
import DatePickDropDownFielder from '../src/DropDownField';
import DropDownField from '../src/DropDownField';
import GlobalHeader from '../src/GlobalHeader';
import InputComponent from '../src/InputComponent';
import ListItem from '../src/ListItem';
import MultiSelect from '../src/MultiSelect';
import ReactDatePicker from '../src/ReactDatePicker';
import Table from '../src/Table';
import TextArea from '../src/TextArea';
import NavLink from '../src/NavLink';
import NavLinks from '../src/NavLinks';
// Style Sheets
import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles/application.scss';

const inputName = (
  <InputComponent
    label="Name"
    type="text"
    gridClassName="col-md-4 col-sm-6 col-xs-12"
  />
);
const inputPhone = (
  <InputComponent
    label="Phone Number"
    type="number"
    gridClassName="col-md-4 col-sm-6 col-xs-12"
  />
);
const clearfix = <div className="clearfix" />;

storiesOf('CWDS Asset Library', module)
  .add('About', About);

storiesOf('CWDS Asset Library', module)
  .add('Accessibility', Accessibility);

storiesOf('Styles', module)
  .add('Colors', Colors);

storiesOf('Alert', module)
  .add('Alert Info', () => (
    <Alert
      alertClassName="info"
      alertMessage="Info Message! Well done guys"
      faIcon="fa-check-circle"
    />
  ))
  .add('Alert Error', () => (
    <Alert
      alertClassName="error"
      alertMessage="Error Message! This is a warning message!!!"
      faIcon="fa-exclamation-triangle"
    />
  ));

storiesOf('Button', module)
  .add('Button Primary', () => (
    <Button btnClassName="primary" btnName="Save changes" />
  ))
  .add('Button Warning', () => (
    <Button btnClassName="warning" btnName="Update Changes" />
  ))
  .add('Button Disabled', () => (
    <Button btnClassName="primary" btnName="Delete changes" disabled="true" />
  ));

storiesOf('Card', module)
  .add('Default', () => (
    <Cards
      cardHeaderText="Title"
      children="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />
  ));

storiesOf('CheckboxRadioGroup', module)
  .add('Default', () => (
    <CheckboxRadioGroup
      label="Characters"
      type={"checkbox"}
      name="Category"
      options={['Mickey Mouse', 'Minnie Mouse', 'Goofy']}
      selectedOptions={[]}
      handleOnChange={e => this.setSate({ value: e.target.value })}
    />
  ));

storiesOf('DatePicker', module)
  .add('Default', () => <DatePicker />);

storiesOf('DateTimePicker', module)
  .add('Default', () => <DateTimePicker />);

storiesOf('DropDownField', module)
  .add('Default', () => (
    <DropDownField
      name="Characters"
      options={['Mickey Mouse', 'Minnie Mouse', 'Goofy']}
      selectedOption=""
      handleOnChange={e => this.setSate({ value: e.target.value })}
      placeholder="Choose Character"
    />
  ));

storiesOf('GlobalHeader', module)
  .add('Default', () => <GlobalHeader />);

storiesOf('InputComponent', module)
  .add('Default', () => <InputComponent />);

storiesOf('ListItem', module)
  .add('Default', () => (
    <div>
      <ListItem children={[inputName, inputPhone, clearfix]} />
    </div>
  ));

storiesOf('MultiSelect', module)
  .add('Default', () => <MultiSelect />);

storiesOf('ReactDatePicker', module)
  .add('Default', () => <ReactDatePicker />);

storiesOf('Table', module)
  .add('Table', () => <Table />);

storiesOf('TextArea', module)
  .add('Default', () => (
    <TextArea
      label="Example"
      name="Text Area"
      handleOnChange={e => this.setSate({ value: e.target.value })}
      rows={5}
      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      value=""
    />
  ));

