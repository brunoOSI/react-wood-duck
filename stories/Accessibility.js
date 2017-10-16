import React from 'react';

import { storiesOf } from '@storybook/react';

const Accessibility = () => (
  <main className="styleguide-content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="styleguide-inner">
            <h1 id="accesibility" className="styleguide">
              Accessibility
            </h1>
            <h2>Accessibility Checklist</h2>
            <p className="styleguide">
              <span>
                This checklist helps developers identify potential accessibility
                issues affecting their websites or applications. It&#39;s broken
                down into three sections of decreasing importance: A, B and C.
                Please check and address these issues in the order in which they
                appear.
              </span>
            </p>
            <p className="styleguide">
              For more detail on accessibilty standards, please see{" "}
              <a
                className="styleguide"
                href="https://www.w3.org/TR/WCAG20/"
                title="https://www.w3.org/TR/WCAG20/"
              >
                WCAG2.0 AA
              </a>
            </p>
            <ul className="styleguide">
              <li>
                A - Critical issues that will cause serious problems and/or stop
                most users of assistive technology from using the site
              </li>
              <li>
                B - Issues that may cause problems or increased frustration for
                certain users
              </li>
              <li>
                C - Minor issues that will cause problems or frustration for a
                small number of users It is important to note, while B and C are
                noted as less critical, they are still required to be truly 508
                compliant. This checklist should be used as a reference for
                development and is not a substitute for compliance checks by a
                section 508 coordinator.
              </li>
            </ul>
            <h2>A - Critical</h2>
            <ul className="styleguide">
              <li>
                Site is keyboard accessible
                <ul className="styleguide">
                  <li>All interactions can be accessed with a keyboard</li>
                </ul>
              </li>
              <li>
                Site is free of keyboard traps
                <ul className="styleguide">
                  <li>The keyboard focus is never trapped in a loop</li>
                </ul>
              </li>
              <li>All form inputs have explicit labels</li>
              <li>All relevant images use an img tag</li>
              <li>All images have alt attributes</li>
              <li>
                Multimedia is tagged
                <ul className="styleguide">
                  <li>
                    All multimedia has appropriate captioning and audio
                    description
                  </li>
                </ul>
              </li>
              <li>
                Text has sufficient color contrast
                <ul className="styleguide">
                  <li>
                    All text has a contrast ratio of 4.5:1 with the background
                  </li>
                </ul>
              </li>
            </ul>
            <h2>B - Less Critical</h2>
            <ul className="styleguide">
              <li>
                Site never loses focus
                <ul className="styleguide">
                  <li>
                    Focus is always visible when moving through the page with
                    the keyboard
                  </li>
                </ul>
              </li>
              <li>Tab order is logical</li>
              <li>Form instructions are associated with inputs</li>
              <li>
                Site doesn&#39;t timeout unexpectedly
                <ul className="styleguide">
                  <li>
                    Identify elements that may &quot;timeout&quot; and verify
                    that the user can request more time
                  </li>
                </ul>
              </li>
              <li>
                Tables are coded properly
                <ul className="styleguide">
                  <li>Tables have proper headers and column attributes</li>
                </ul>
              </li>
              <li>
                Headings are nested properly
                <ul className="styleguide">
                  <li>Heading elements are nested in a logical way</li>
                </ul>
              </li>
            </ul>
            <h2>C - Minor</h2>
            <ul className="styleguide">
              <li>
                Frames are named
                <ul className="styleguide">
                  <li>All frames have a name element</li>
                </ul>
              </li>
              <li>
                Flashing elements are compliant
                <ul className="styleguide">
                  <li>
                    Elements that flash on screen do so at a rate of less than
                    3hz
                  </li>
                </ul>
              </li>
              <li>
                Language is set
                <ul className="styleguide">
                  <li>The language for the page is set</li>
                  <li>
                    The language for sections on the page that differ from the
                    site language are set
                  </li>
                </ul>
              </li>
              <li>
                CSS is not required to use the page
                <ul className="styleguide">
                  <li>The page makes sense with or without CSS</li>
                </ul>
              </li>
              <li>
                Links are unique and contextual
                <ul className="styleguide">
                  <li>
                    All links can be understood taken alone, i.e &#39;Read more
                    - about 508&#39;
                  </li>
                </ul>
              </li>
              <li>Page titles are descriptive</li>
              <li>Required plugins are linked on the page</li>
            </ul>
            <h2>Form Accessibility</h2>
            <ul className="styleguide">
              <li>
                Display form controls in the same order in HTML as they appear
                on screen. Do not use CSS to rearrange the form controls. Screen
                readers narrate forms in the order they appear in the HTML.
              </li>
              <li>
                Visually align validation messages with the input fields, so
                people using screen magnifiers can read them quickly.
              </li>
              <li>
                Group each set of thematically related controls in a fieldset
                element. Use the legend element to offer a label within each
                one. The fieldset and legend elements make it easier for screen
                reader users to navigate the form.
              </li>
              <li>
                Use a single legend for fieldset (this is required). One example
                of a common use of fieldset and legend is a question with radio
                button options for answers. The question text and radio buttons
                are wrapped in a fieldset, with the question itself being inside
                the legend tag.
              </li>
              <li>
                Embed multiple fieldsets and legends for more complex forms.
              </li>
              <li>
                Keep your form blocks in a vertical pattern. This approach is
                ideal, from an accessibility standpoint, because of limited
                vision that makes it hard to scan from right to left.
              </li>
            </ul>
            <h2>Supporting screen readers</h2>
            <p className="styleguide">
              Note: These code examples have been designed to support a range of
              screen readers. That said, they may not work with all versions.
              Known issues
            </p>
            <ul className="styleguide">
              <li>
                VoiceOver on iOS currently does not support fieldset and legend
                for forms. You can address this by using
                aria-labeledby=&#39;for-attribute-of-label id-of-legend
                id-of-additional-info&#39; on each input in the fieldset. Using
                aria-labeledby will overwrite the default text read by the
                screen reader, so it is important to include all relevant
                information.
              </li>
              <li>
                VoiceOver on OS X currently does not support. aria-describedby
                Use aria-labeledby instead, and include all related fields,
                including, labels, legend, and hint text
              </li>
            </ul>
            <h2>Implementation &amp; Testing</h2>
            <ul className="styleguide">
              <li>
                <a
                  className="styleguide"
                  href="http://pa11y.org/"
                  title="http://pa11y.org/"
                >
                  Automated testing / CI integration with Pa11y
                </a>
              </li>
            </ul>
            <h2>Resources</h2>
            <ul className="styleguide">
              <li>
                <a
                  className="styleguide"
                  href="https://www.w3.org/TR/WCAG20/"
                  title="https://www.w3.org/TR/WCAG20/"
                >
                  WCAG2.0 AA
                </a>
              </li>
              <li>
                <a
                  className="styleguide"
                  href="https://accessibility.18f.gov"
                  title="https://accessibility.18f.gov"
                >
                  18F Accessibility Guide
                </a>
              </li>
              <li>
                <a
                  className="styleguide"
                  href="http://webaim.org"
                  title="http://webaim.org"
                >
                  WebAIM
                </a>
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </div>
  </main>
);

storiesOf('CWDS Asset Library', module).add('Accessibility', Accessibility);