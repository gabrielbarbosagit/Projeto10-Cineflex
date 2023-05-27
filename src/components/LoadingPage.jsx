import styled from "styled-components";
import loading from "../assets/img/loading.gif";

export default function LoadingPage() {
  return <Loading src={loading} />;
}

const Loading = styled.img`
  
  
        width: 300px;
        height: 300px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
 
`;