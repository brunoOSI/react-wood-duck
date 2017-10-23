import React from 'react';

import { storiesOf } from '@storybook/react';

const About = () => (
  <main className="styleguide-content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="styleguide-inner">
            <h1 className="styleguide">CWDS Pattern Library</h1>

            <p className="lead">Version 0.31</p>

            <p className="lead">
              This pattern library is for all the digital services to contribue
              to and use for CWDS. Current library is CSS only but our goal is
              to have a component-based library. This is a cross team
              collaborative effort between designer and developers on Intake,
              CALS, and Case Managment. It is open source and the repository can
              be found at:{' '}
              <a href="https://github.com/ca-cwds/react-wood-duck">
                https://github.com/ca-cwds/react-wood-duck
              </a>
            </p>

            <p className="lead">Learn more about:</p>

            <ul>
              <li>
                <a href="https://github.com/ca-cwds/research-design/wiki">
                  Pattern library vision and goals
                </a>
              </li>
              <li>
                <a href="https://github.com/ca-cwds/research-design/wiki/Experience-Values">
                  User Experience Values
                </a>{' '}
                we design to.
              </li>
              <li>
                <a href="https://github.com/ca-cwds/research-design/wiki/Accessible-Design">
                  Accessibilty Standards
                </a>{' '}
                we follow.
              </li>
              <li>
                <a href="https://github.com/ca-cwds/research-design/wiki/Technical-Design-Brief">
                  Browsers and screens
                </a>{' '}
                we support.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
);

storiesOf('CWDS Asset Library', module).add('About', About);
