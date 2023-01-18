import React from 'react';
import {useParams} from 'react-router-dom'

function Product() {
  const { listId } = useParams();
  return(
    <div>
      <h4> {listId} 번째 페이지 입니다.</h4>
      <h4>https://goddaehee.tistory.com/305</h4>
      <h4>https://www.youtube.com/watch?v=WT58gOl8Eh8&list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7&index=4</h4>
      <h4>https://usage.tistory.com/46</h4>
      <h4>https://jh-yoon.tistory.com/21</h4>
    </div>
  );
}

export default Product;