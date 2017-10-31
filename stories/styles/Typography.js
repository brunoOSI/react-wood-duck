import React from 'react';
import { storiesOf } from '@storybook/react';

const styles = { paddingTop: '2.25rem', paddingBottom: '2.25rem' };
const TypographyStory = () => (
  <div className="container-fluid">
    <h1>Typography Specifications</h1>
    <p>
      The font-family we are using is <strong>Source Sans Pro</strong> and below
      are the specs in rem.
    </p>
    <div className="row" style={styles}>
      <div className="col-6 col-sm-4">
        <h1>H1 Page Title</h1>
      </div>
      <div className="col-6 col-sm-4">
        <h1>Regular 2.8 rem</h1>
      </div>
    </div>
    <div className="row" style={styles}>
      <div className="col-6 col-sm-4">
        <h2>H2 Card Header</h2>
      </div>
      <div className="col-6 col-sm-4">
        <h2>Semibold 2.4 rem</h2>
      </div>
    </div>
    <div className="row" style={styles}>
      <div className="col-6 col-sm-4">
        <h3>H3 Title</h3>
      </div>
      <div className="col-6 col-sm-4">
        <h3>Medium 2 rem</h3>
      </div>
    </div>
    <div className="row" style={styles}>
      <div className="col-6 col-sm-4">
        <h4>H4 Subheader</h4>
      </div>
      <div className="col-6 col-sm-4">
        <h4>Regular 1.8 rem</h4>
      </div>
    </div>
    <div className="row" style={styles}>
      <div className="col-6 col-sm-4">
        <span className="menu" style={{ fontWeight: '600' }}>
          Body 2 / Menu
        </span>
      </div>
      <div className="col-6 col-sm-4">
        <span className="menu" style={{ fontWeight: '600' }}>
          Medium 1.5 rem
        </span>
      </div>
    </div>
    <div className="row" style={styles}>
      <div className="col-6 col-sm-4">
        <span className="body">Body 1</span>
      </div>
      <div className="col-6 col-sm-4">
        <span className="body">Regular 1.5 rem</span>
      </div>
    </div>
    <div className="row" style={styles}>
      <div className="col-6 col-sm-4">
        <div className="c-dark-grey" style={{ fontSize: '1.4rem' }}>
          Helper Text
        </div>
      </div>
      <div className="col-6 col-sm-4">
        <div className="c-dark-grey" style={{ fontSize: '1.4rem' }}>
          Regular 1.4 rem
        </div>
      </div>
    </div>
    <div className="row" style={styles}>
      <div className="col-6 col-sm-4">
        <span style={{ fontSize: '10px' }}>Base font size</span>
      </div>
      <div className="col-6 col-sm-4">
        <span style={{ fontSize: '10px' }}>10 px</span>
      </div>
    </div>
  </div>
);

storiesOf('Styles', module).add('Typography', TypographyStory);
