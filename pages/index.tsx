import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { DetailPanel, CardPanel } from 'components';
import { useFetch } from 'helper/GameHelper';

const HomePage = () => {
  const {
    data,
    loading,
    onCreate,
    onFetch,
    clickCount,
    setClickCount,
  } = useFetch();

  return (
    <div>
      <Row>
        <Col md={3} lg={3}>
          <DetailPanel
            click_count={clickCount}
            personal_best={data?.personal_best}
            global_best={data?.global_best}
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
