import {Button, Form} from "react-bootstrap";
import {TextInputComponent} from "../../components/form/TextInputComponent.tsx";
import {useAuth} from "../../context/useAuthContext.tsx";
import {useState} from "react";


export function Login() {
  const groupClassProperties: string = "mb-3";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {loginUser} = useAuth();
  const handleLogin = (username: string, password: string) => {
    loginUser(username, password);
  }

  return (
      <>
        <h2>Login</h2>

        <Form className="container" onSubmit={() => console.log("submit")}>
          <Form.Group className={groupClassProperties} controlId="formUsername">
            <TextInputComponent label="Nome" value={username} updateValue={setUsername}/>
            <Form.Text className="text-muted">Insira o nome de Usuário </Form.Text>
          </Form.Group>
          <Form.Group className={groupClassProperties} controlId="formPassword">
              <Form.Label>Senha:</Form.Label>
              <Form.Control
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}/>
            <Form.Text className="text-muted">Insira sua senha </Form.Text>
          </Form.Group>

          <Button variant="primary" type="button" onClick={() => handleLogin(username, password)}>Login</Button>
        </Form>
      </>

  )
}