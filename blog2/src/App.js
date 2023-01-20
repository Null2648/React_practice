/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {


  let post = '블로그 내용이지롱~';
  let [메뉴, b] = useState(['메뉴 추천', '베스트', '떡국']);
  let [메뉴추천] = useState('오므라이스');
  let [좋아요, 수올리기] = useState(0);
  let [좋아요1, 수올리기1] = useState(0);
  let [좋아요2, 수올리기2] = useState(0);
  let [변경, 김치볶음밥] = useState('블로그 내용이지롱~');
  let [바꾸기, 바꾸기1] = useState(['메뉴', '워스트', '라면']);
  const [메뉴1, 메뉴변경] = useState(['오늘 점심 뭐먹지?', '메뉴', '워스트']);
  const [내용, 내용변경] = useState(['자장면', '오므라이스', '라면']);

  return (
    <div className="App">



      <div className='black-nav'>
        <h4 id={post} style={{color:'yellowgreen', fontSize : '20px'}}
        >블로그 입니당</h4>
      </div>




      <button onClick={()=>{
        let copy = [...메뉴1];
        copy[0] = '메뉴 추천';
        copy[1] = '베스트';
        메뉴변경(copy);
      }}>글수정</button>




      <button onClick={()=>{
        let copy1 = [...메뉴1];
        let copy2 = [...내용];
        let copy3 = {}
        for ( let i= 0; i <copy1.length; i++){
          copy3[copy1[i]] = copy2[i];}
        copy1 = copy1.sort()
        let copy4 = []
        for (let i =0; i <copy1.length; i++){
          console.log(copy3[copy1[i]]);
          copy4.push(copy3[copy1[i]]);
        
        메뉴변경(copy1)
        내용변경(copy4)

        };
      }}>정렬하기</button>





      <div className="list">
      <h4> {메뉴1[0]}<span onClick={()=>{수올리기(좋아요+1)}}>☺</span> {좋아요} </h4>
      <p dangerouslySetInnerHTML={{__html: 내용[0]}}></p>
      </div>
      <div className="list">
      <h4> {메뉴1[1]} <span onClick={()=>{수올리기1(좋아요1+1)}}>☺</span> {좋아요1} </h4>
      <p> {내용[1]}</p>
      </div>
      <div className="list">
      <h4> {메뉴1[2]} <span onClick={()=>{수올리기2(좋아요2+1)}}>☺</span> {좋아요2} </h4>
      <p> {내용[2]}</p>


      </div>
    </div>
  );
}

export default App;