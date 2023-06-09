import styled from "styled-components";

export default function Form({ setName, setCpf, bookSeats, name, cpf }) {
  return (
    <FormContainer>
      <form onSubmit={bookSeats}> 
        <label htmlFor="name">Nome do Comprador:</label>
        <input
          data-test="client-name"
          type="text"
          pattern="[a-zA-ZÀ-ú]+([ ]?[a-zA-ZÀ-ú]+)*"
          required
          placeholder="Digite seu nome..."
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="cpf">CPF do Comprador:</label>
        <input
          data-test="client-cpf"
          placeholder="Digite seu CPF..."
          id="cpf"
          type="text"
          pattern="[0-9]{11}"
          required
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <Button>
          <button data-test="book-seat-btn" type="submit">
            Reservar Assento(s)
          </button>
        </Button>
      </form>
    </FormContainer>
  );
}

// Resto do código


const FormContainer = styled.div`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  font-size: 18px;
  input {
    width: calc(100vw - 60px);
    margin-left: 20px;
  }
  label {
    text-align: left;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 20px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    &:hover {
      background-color: rgb(234 88 12);
    }
    cursor: pointer;
  }
`;