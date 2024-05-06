import "./styles.css";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function Card(post, onDeletePost) {

  const navigate = useNavigate()

  return (
    <article className="cardContainer">
      <header>
        <h2>{post.nome}</h2>
        <MdDelete onClick={()=> onDeletePost(post.id)}size={28} color="#ed4337"/>
      </header>
      <p>
        {post.telfone}
      </p>
      <p>
        {post.email}
      </p>


      <div className="buttonsContainer">
        <button onClick={()=> navigate(`/post/${post.id}`)}>Ver Cadastro</button>
        <button onClick={()=> navigate(`/updatePost${post.id}`)}>Editar</button>
      </div>
    </article>
  );
}
