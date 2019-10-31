import { Container, Label } from "./styles";

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer migarção completa de servidor</p>
      <img
        src="https://api.adorable.io/avatars/285/abott@adorable.png"
        alt="avatar"
      />
    </Container>
  );
}
