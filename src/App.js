

import Hello from './component/Hello';
import Wellcome from './component/Wellcome';


function App() {
  // 변수 
  const name = "Hong";
  let age = 30;
  let gende = ture;
  // 객체
  const naver = {
    name : "네이버",
    url : "http://www.naver.com",
    target : "_blank"
  }
  return (
    <div className="App">
      {/* 컴포넌트 */}
      <Hello></Hello>
      <Wellcome></Wellcome>
    
      {/* {변수,숫자,문자열}사용가능 */}
      <h1>{'이름 : '} {name},{'나이 : '}{age}</h1>
      <h1>이름 :  {name},나이 : {age}</h1>
      {/* 객체{객체이름.속성} */}
      <h2><a href={naver.url}target={naver.target}>{naver.name}</a></h2>
    </div>
  );
}

export default App;
