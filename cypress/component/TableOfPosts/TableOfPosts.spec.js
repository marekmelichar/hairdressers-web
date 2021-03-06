/* eslint-disable no-undef */
/// <reference types="cypress" />
import React from 'react';
import { IntlProvider } from 'react-intl-hooks';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'cypress-react-unit-test';
import TableOfPosts from '../../../src/app/components/TableOfPosts/TableOfPosts';
import { locales } from '../../../src/app/i18n';

const currentLocale = 'cs';

const data = [
  {
    id: 1,
    name: 'Mamka od pan\u00ed Suchomelov\u00e9',
    color: "Trval\u00e1",
    colorCode:"",
    price:"500",
    comments:"Trval\u00e1 = 20 min, Ustalova\u010d = 10, R\u016f\u017eov\u00fd nat\u00e1\u010dky - p\u0159\u00ed\u0161t\u011b na st\u0159\u00edda\u010dku s men\u0161\u00edma (vr\u0161ek povolenej)"
  }
]

describe('TableOfPosts', () => {
  it('TableOfPosts is visible', () => {
    mount(
      <BrowserRouter>
        <IntlProvider locale={currentLocale} messages={locales[currentLocale]} defaultLocale="cs">
          <TableOfPosts data={data} />
        </IntlProvider>
      </BrowserRouter>
    );

    cy.get('[data-cy=TableOfPosts]').should('be.visible');
  });
});
