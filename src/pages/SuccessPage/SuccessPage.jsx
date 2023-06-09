import styled from "styled-components";
import { Link } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";

export default function SuccessPage({ orderData }) {
  const { name, cpf, seats, selectedSeat } = orderData;

  if (orderData === null) {
    return <LoadingPage />;
  }

  return (
    <PageContainer>
      <h1>Pedido feito <br /> com sucesso! </h1>

      <TextContainer data-test="movie-info">
        <strong>
            <p>Filme e Sessão:</p>
        </strong>
        <p>{seats.movie.title}</p>
        <p>{seats.day.date} - {seats.name}</p>
      </TextContainer>

      <TextContainer data-test="seats-info">
        <strong>
          <p>Ingressos:</p>
        </strong>
        {selectedSeat.map((number) => (
          <p key={number.id}>Assento {number.name}</p>
        ))}
      </TextContainer>

      <TextContainer data-test="client-info">
        <strong>
          <p>Comprador:</p>
        </strong>
        <p>Nome: {name}</p>
        <p>CPF: {cpf}</p>
      </TextContainer>
      <Link to="/" data-test="go-home-btn" >
        <button >Voltar para Home</button>
      </Link>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  color: #293845;
  margin: 30px 20px;
  padding-bottom: 120px;
  padding-top: 70px;
  a {
    text-decoration: none;
  }
  button {
    margin-top: 50px;
    &:hover {
        background-color: rgb(234 88 12);
    }
    cursor: pointer;
  }
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #247a6b;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  strong {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;