import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form";
import { api } from "../../lib/axios";
import "./styles.css";

export function CreatePost() {

  const navigate = useNavigate()

  function handleCreatePost(data) {
    api.post('/posts',data)
    console.log('Criado com sucesso!')
    navigate('/')
    // reset()
}


  return (
    <div>
      <Form title={'Cadastro'} textButton={'Enviar'} onAction={handleCreatePost}/>
    </div>
  );
}
