import React from 'react';

import { storiesOf } from '@storybook/react';

const Colors = () => (
  <main className="styleguide-content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="styleguide-inner">
            <h1 id="Colors" className="styleguide">
              Colors
            </h1>

            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <td>Color</td>
                    <td>Name</td>
                    <td>Color className</td>
                    <td>Background className</td>
                    <td>Value</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-light-blue" />
                    <td>
                      <code>$light-blue</code>
                    </td>
                    <td>
                      <code>.c-light-blue</code>
                    </td>
                    <td>
                      <code>.bg-light-blue</code>
                    </td>
                    <td>
                      <code>#1ba7fa</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-medium-blue" />
                    <td>
                      <code>$medium-blue</code>
                    </td>
                    <td>
                      <code>.c-medium-blue</code>
                    </td>
                    <td>
                      <code>.bg-medium-blue</code>
                    </td>
                    <td>
                      <code>#2974a2</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-dark-blue" />
                    <td>
                      <code>$dark-blue</code>
                    </td>
                    <td>
                      <code>.c-dark-blue</code>
                    </td>
                    <td>
                      <code>.bg-dark-blue</code>
                    </td>
                    <td>
                      <code>#053d53</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-white" />
                    <td>
                      <code>$white</code>
                    </td>
                    <td>
                      <code>.c-white</code>
                    </td>
                    <td>
                      <code>.bg-white</code>
                    </td>
                    <td>
                      <code>#ffffff</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-white-smoke" />
                    <td>
                      <code>$white-smoke</code>
                    </td>
                    <td>
                      <code>.c-white-smoke</code>
                    </td>
                    <td>
                      <code>.bg-white-smoke</code>
                    </td>
                    <td>
                      <code>#f5f5f5</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-lightest-grey" />
                    <td>
                      <code>$lightest-grey</code>
                    </td>
                    <td>
                      <code>.c-lightest-grey</code>
                    </td>
                    <td>
                      <code>.bg-lightest-grey</code>
                    </td>
                    <td>
                      <code>#e8e8e8</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-light-grey" />
                    <td>
                      <code>$light-grey</code>
                    </td>
                    <td>
                      <code>.c-light-grey</code>
                    </td>
                    <td>
                      <code>.bg-light-grey</code>
                    </td>
                    <td>
                      <code>#d4d4d4</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-medium-grey" />
                    <td>
                      <code>$medium-grey</code>
                    </td>
                    <td>
                      <code>.c-medium-grey</code>
                    </td>
                    <td>
                      <code>.bg-medium-grey</code>
                    </td>
                    <td>
                      <code>#b1b1b1</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-dark-grey" />
                    <td>
                      <code>$dark-grey</code>
                    </td>
                    <td>
                      <code>.c-dark-grey</code>
                    </td>
                    <td>
                      <code>.bg-dark-grey</code>
                    </td>
                    <td>
                      <code>#707070</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-darkest-grey" />
                    <td>
                      <code>$darkest-grey</code>
                    </td>
                    <td>
                      <code>.c-darkest-grey</code>
                    </td>
                    <td>
                      <code>.bg-darkest-grey</code>
                    </td>
                    <td>
                      <code>#050505</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-light-green" />
                    <td>
                      <code>$light-green</code>
                    </td>
                    <td>
                      <code>.c-light-green</code>
                    </td>
                    <td>
                      <code>.bg-light-green</code>
                    </td>
                    <td>
                      <code>#3fbfad</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-medium-green" />
                    <td>
                      <code>$medium-green</code>
                    </td>
                    <td>
                      <code>.c-medium-green</code>
                    </td>
                    <td>
                      <code>.bg-medium-green</code>
                    </td>
                    <td>
                      <code>#297d74</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-dark-green" />
                    <td>
                      <code>$dark-green</code>
                    </td>
                    <td>
                      <code>.c-dark-green</code>
                    </td>
                    <td>
                      <code>.bg-dark-green</code>
                    </td>
                    <td>
                      <code>#065144</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-yellow" />
                    <td>
                      <code>$yellow</code>
                    </td>
                    <td>
                      <code>.c-yellow</code>
                    </td>
                    <td>
                      <code>.bg-yellow</code>
                    </td>
                    <td>
                      <code>#e8d41c</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-orange" />
                    <td>
                      <code>$orange</code>
                    </td>
                    <td>
                      <code>.c-orange</code>
                    </td>
                    <td>
                      <code>.bg-orange</code>
                    </td>
                    <td>
                      <code>#fa8d29</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-red" />
                    <td>
                      <code>$red</code>
                    </td>
                    <td>
                      <code>.c-red</code>
                    </td>
                    <td>
                      <code>.bg-red</code>
                    </td>
                    <td>
                      <code>#d8263d</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Accessible Colors</h2>
            <p className="styleguide">
              Here is a list of accessible color combination:
            </p>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>Foreground Color</td>
                    <td>Background Color</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="c-medium-blue bg-white">$medium-blue</td>
                    <td className="c-medium-blue bg-white">$white</td>
                  </tr>
                  <tr>
                    <td className="c-dark-grey bg-white">$dark-grey</td>
                    <td className="c-dark-grey bg-white">$white</td>
                  </tr>
                  <tr>
                    <td className="c-darkest-grey bg-white">$darkest-grey</td>
                    <td className="c-darkest-grey bg-white">$white</td>
                  </tr>
                  <tr>
                    <td className="c-medium-green bg-white">$medium-green</td>
                    <td className="c-medium-green bg-white">$white</td>
                  </tr>
                  <tr>
                    <td className="c-dark-green bg-white">$dark-green</td>
                    <td className="c-dark-green bg-white">$white</td>
                  </tr>
                  <tr>
                    <td className="c-red bg-white">$red</td>
                    <td className="c-red bg-white">$white</td>
                  </tr>
                  <tr>
                    <td className="c-medium-blue bg-white-smoke">$medium-blue</td>
                    <td className="c-medium-blue bg-white-smoke">$white-smoke</td>
                  </tr>
                  <tr>
                    <td className="c-dark-grey bg-white-smoke">$dark-grey</td>
                    <td className="c-dark-grey bg-white-smoke">$white-smoke</td>
                  </tr>
                  <tr>
                    <td className="c-darkest-grey bg-white-smoke">$darkest-grey</td>
                    <td className="c-darkest-grey bg-white-smoke">$white-smoke</td>
                  </tr>
                  <tr>
                    <td className="c-medium-green bg-white-smoke">$medium-green</td>
                    <td className="c-medium-green bg-white-smoke">$white-smoke</td>
                  </tr>
                  <tr>
                    <td className="c-dark-green bg-white-smoke">$dark-green</td>
                    <td className="c-dark-green bg-white-smoke">$white-smoke</td>
                  </tr>
                  <tr>
                    <td className="c-red bg-white-smoke">$red</td>
                    <td className="c-red bg-white-smoke">$white-smoke</td>
                  </tr>
                  <tr>
                    <td className="c-white bg-medium-blue">$white</td>
                    <td className="c-white bg-medium-blue">$medium-blue</td>
                  </tr>
                  <tr>
                    <td className="c-white bg-dark-blue">$white</td>
                    <td className="c-white bg-dark-blue">$dark-blue</td>
                  </tr>
                  <tr>
                    <td className="c-white bg-dark-grey">$white</td>
                    <td className="c-white bg-dark-grey">$dark-grey</td>
                  </tr>
                  <tr>
                    <td className="c-white bg-darkest-grey">$white</td>
                    <td className="c-white bg-darkest-grey">$darkest-grey</td>
                  </tr>
                  <tr>
                    <td className="c-white bg-medium-green">$white</td>
                    <td className="c-white bg-medium-green">$medium-green</td>
                  </tr>
                  <tr>
                    <td className="c-white bg-dark-green">$white</td>
                    <td className="c-white bg-dark-green">$dark-green</td>
                  </tr>

                  <tr>
                    <td className="c-white bg-red">$white</td>
                    <td className="c-white bg-red">$red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

storiesOf('Styles', module).add('Colors', Colors);