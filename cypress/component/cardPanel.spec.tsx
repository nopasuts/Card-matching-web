import React from 'react'
import { mount } from '@cypress/react'

import CardPanel from 'components/CardPanel/CardPanel'

const data = {
  id: 1,
  board_id: 'some-board-id',
  click_count: 0,
  is_finish: false,
  rows: 3,
  columns: 4,
  cards: [
    {
      is_open: false,
      id: 1,
      position: '1x1'
    },
    {
      is_open: false,
      id: 2,
      position: '1x2'
    }
  ]
}

const onFetch = () => {}

describe('CardPanel', () => {
  it('start', () => {
    mount(
      <CardPanel
        data={data}
        onFetch={onFetch}
      />
    )
    cy.get('[data-cy=card-panel-container]').should('exist')
  })

  it('show board with cards', () => {
    mount(
      <CardPanel
        data={data}
        onFetch={onFetch}
      />
    )
    cy.get('[data-cy=card-panel-container]').should('exist')
    cy.get('[data-cy=card-row]').should(($p) => {
      expect($p).to.have.length(3)
    })
    cy.get('[data-cy=card-col]').should(($p) => {
      expect($p).to.have.length(4)
    })
  })
})
