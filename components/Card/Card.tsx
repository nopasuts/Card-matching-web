import React, { useState, useEffect } from 'react';
import { getCookie } from "libs/cookie";
import { onOpen, onMatchCard, onEachClick } from 'helper/CardHelper';

import styles from './styles.module.scss';

interface ICard {
  id: number
  position: string
  is_open: boolean
  value?: number
}

interface IProps {
  card: ICard
  onClick: Function
  isTempOpen: boolean
  firstCard: string
  setFirstCard: Function
  secondCard: string
  setSecondCard: Function
  onFetch: Function
  setClickCount: Function
}

const Card = ({
  card,
  firstCard,
  setFirstCard,
  secondCard,
  setSecondCard,
  onFetch,
  setClickCount,
}: IProps) => {
  const [value, setValue] = useState(null);

  const position = card?.position;

  const handleClick = async () => {
    if (!firstCard || !secondCard) {
      const c_board_id = getCookie('c_board_id');
      const result = await onOpen(position);
      const clickedResult = await onEachClick();
      setClickCount(clickedResult?.click_count)
      setValue(result?.value)
      if (firstCard) {
        if (secondCard) {
          setFirstCard('');
          setSecondCard('');
        } else {
          setSecondCard(position)
          await onMatchCard(firstCard, position);
          await onFetch(c_board_id);
          setFirstCard('');
          setSecondCard('');
        }
      } else {
        setFirstCard(position);
        await onFetch(c_board_id);
      }
    }
  }

  const isTempOpen = position === firstCard || position === secondCard

  useEffect(() => {
    const fetchForIsOpen = async () => {
      const result = await onOpen(position);
      setValue(result?.value);
    };
    if (card?.is_open) {
      fetchForIsOpen();
    }
  }, [card?.is_open])

  return (
    <button
      className={`${styles.card__container} ${card?.is_open || isTempOpen ? `${styles.card__open}` : `${styles.card__close}`} `}
      onClick={() => handleClick()}
      disabled={card?.is_open}
    >
      <div>
        {card?.is_open || isTempOpen ?
          (<h3>{value}</h3>)
          : null}
      </div>
    </button>
  )
}

export default Card;
