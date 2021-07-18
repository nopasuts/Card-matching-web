import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from 'components';
import { numberToArray } from 'utils';

interface ICard {
  id: number
  position: string
  is_open: boolean
}

interface IProps {
  data: {
    id: number
    board_id: string
    click_count: number
    is_finish: boolean
    columns: number
    rows: number
    cards: ICard[]
  }
  onFetch: Function
}

const CardsColumn = ({
  rows,
  columns,
  cards,
  firstCard,
  setFirstCard,
  secondCard,
  setSecondCard,
  onFetch,
}) => {
  const columnsArray = numberToArray(columns)

  return (
    <Row data-cy="card-row">
      {columnsArray.map((each) => {
        const position = `${each}x${rows}`
        const card = cards.find((eachCard: ICard) => eachCard.position === position)

        return (
          <Col key={each} xs={6} md={'auto'} data-cy="card-col">
            <Card
              card={card}
              firstCard={firstCard}
              setFirstCard={setFirstCard}
              secondCard={secondCard}
              setSecondCard={setSecondCard}
              onFetch={onFetch}
            />
          </Col>
        )
      })}
    </Row>
  );
}

const CardsRow = ({
  rows,
  columns,
  cards,
  firstCard,
  setFirstCard,
  secondCard,
  setSecondCard,
  onFetch,
}) => {
  const rowsArray = numberToArray(rows);

  return (
    <div>
      {rowsArray.map((each) => (
          <CardsColumn
            key={each}
            rows={each}
            columns={columns}
            cards={cards}
            firstCard={firstCard}
            setFirstCard={setFirstCard}
            secondCard={secondCard}
            setSecondCard={setSecondCard}
            onFetch={onFetch}
          />
      ))}
    </div>
  );
};

const CardPanel = ({ data, onFetch }: IProps) => {
  const [firstCard, setFirstCard] = useState('');
  const [secondCard, setSecondCard] = useState('');

  return (
    <Container fluid data-cy="card-panel-container">
      <CardsRow
        rows={data?.rows}
        columns={data?.columns}
        cards={data?.cards}
        firstCard={firstCard}
        setFirstCard={setFirstCard}
        secondCard={secondCard}
        setSecondCard={setSecondCard}
        onFetch={onFetch}
      />
    </Container>
  )
}

export default CardPanel;
