import React from 'react'
import { mount } from '@cypress/react'

import DetailPanel from 'components/DetailPanel/DetailPanel'

describe('DetailPabel', () => {
  it('show default data correctly', () => {
    mount(
      <DetailPanel
        click_count={0}
        personal_best={0}
        global_best={0}
      />
    )
    cy.get('[data-cy=detail-panel-container]').should('exist')
    cy.get('[data-cy=detail-panel-click]').should('exist').should('have.value', '0')
    cy.get('[data-cy=detail-panel-personal]').should('exist').should('have.value', '-')
    cy.get('[data-cy=detail-panel-global]').should('exist').should('have.value', '-')
  })

  it('show passed data correctly', () => {
    mount(
      <DetailPanel
        click_count={4}
        personal_best={3}
        global_best={2}
      />
    )
    cy.get('[data-cy=detail-panel-container]').should('exist')
    cy.get('[data-cy=detail-panel-click]').should('exist').should('have.value', '4')
    cy.get('[data-cy=detail-panel-personal]').should('exist').should('have.value', '3')
    cy.get('[data-cy=detail-panel-global]').should('exist').should('have.value', '2')
  })
})
