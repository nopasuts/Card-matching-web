import React, { useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { DetailPanel, CardPanel } from 'components';
import { useFetch } from 'helper/GameHelper';
import { useStats, onFinish } from 'helper/StatHelper';
import { getCookie } from "libs/cookie";

const HomePage = () => {
  const {
    data,
    loading,
    onCreate,
    onFetch,
    clickCount,
    setClickCount,
  } = useFetch();
  const {
    stat,
    global,
    onFetchUser,
    onFetchGlobal,
  } = useStats();

  useEffect(() => {
    const onAllFetch = async () => {
      const c_board_id = getCookie('c_board_id');
      await onFinish(c_board_id);
      await onFetch(c_board_id);
      await onFetchUser();
      await onFetchGlobal();
    };

    if (data) {
      const isNotOpen = data?.cards.find((each) => each.is_open === false)
      if (!isNotOpen && !data?.is_finish) {
        onAllFetch();
      }
    }
  }, [data]);

  return (
    <div>
      <Row>
        <Col md={3} lg={3}>
          <DetailPanel
            click_count={clickCount}
            personal_best={stat?.best_click_count}
            global_best={global?.best_click_count}
          />
          <div className="d-flex justify-content-center mt-5">
            <Button onClick={onCreate}>New game</Button>
          </div>
        </Col>
        <Col md={9}>
          <CardPanel data={data} onFetch={onFetch} setClickCount={setClickCount} />
        </Col>
      </Row>
    </div>
  )
}

export default HomePage;
