import React, { useEffect, useState } from 'react';
import web3 from "web3";

const App = () => {
  const [web3, setWeb3] = useState(null);
  useEffect(() => {    
    const metamaskConnection = async () => {
      if (!window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        try {
          await window.ethereum.request({ 
            method: "eth_requestAccounts"
          });
        } catch(err) { 
          console.log(err);
        }

      } 
      else if (window.web3) {
        // 메타마스크 레거시를 사용하는 유저를 위해서 작성
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
      }
      else {
        alert("메타마스크를 설치해야합니다");
      }
    };

    metamaskConnection();
  }, []); 

  return (
    <div>
      메타마스크 연결 확인 중...
    </div>
  );
};

export default App;
