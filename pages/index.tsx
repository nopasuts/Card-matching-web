import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { DetailPanel, CardPanel } from 'components';
import { useFetch } from 'helper/GameHelper';

const HomePage = () => {
  const { data, loading, onCreate, onFetch } = useFetch();

  return (
    <div>
      <Row>
        <Col md={3} lg={3}>
          <DetailPanel
            click_count={data?.click_count}
            personal_best={data?.personal_best}
            global_best={data?.global_best}
          />
          <Button onClick={onCreate}>New game</Button>
        </Col>
        <Col md={9}>
          <CardPanel data={data} onFetch={onFetch}/>
        </Col>
      </Row>
    </div>
  )
}

export default HomePage;
