import React from 'react'
import { mount } from '@cypress/react'

import Card from 'components/Card/Card'

const closeCard = {
  id: 1,
  is_open: false,
  position: '1x1'
}

const openCard = {
  id: 1,
  is_open: true,
  position: '1x1'
}

const firstCard = ''
const setFirstCard =( ) => {}
const secondCard = ''
const setSecondCard = () => {}
const onFetch = () => {}

describe('Card', () => {
  it('close card', () => {
    mount(
      <Card
        card={closeCard}
        firstCard={firstCard}
        setFirstCard={setFirstCard}
        secondCard={secondCard}
        setSecondCard={setSecondCard}
        onFetch={onFetch}
      />
    )
    cy.get('[data-cy=card]').should('exist')
  })
  it('open card', () => {
    mount(
      <Card
        card={openCard}
        firstCard={firstCard}
        setFirstCard={setFirstCard}
        secondCard={secondCard}
        setSecondCard={setSecondCard}
        onFetch={onFetch}
      />
    )
    cy.get('[data-cy=card]').should('exist').should('be.disabled')
    cy.get('[data-cy=card-value]').should('exist')
  })
})
