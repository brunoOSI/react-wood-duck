import React from 'react';
import { storiesOf } from '@storybook/react';

const WhitesSpaceStory = () => (
  <div className="container-fluid">
    <div>
      <h1>White Space</h1>
    </div>
    <p>
      Note: For now we are using 10px as a base and the spacing is going to be
      in rem.
    </p>
    <table className="table table-bordered">
      <thead>
        <tr>
          <td className="col-sm-6">Letter</td>
          <td className="col-sm-6">Description</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>n, s, m, l</td>
          <td>none(0rem), small(0.75rem), medium(1.5rem), large(3rem)</td>
        </tr>
      </tbody>
    </table>
  </div>
);
storiesOf('Layout', module).add('White Space', WhitesSpaceStory);
