import { Form } from "../../components/Form";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

export function UpdatePost() {
    const navigate = useNavigate()

    const { id } = useParams()

    function handleUpdatePost(data){
        api.put(`/post/${id}`,data)
        navigate('/')
    }


    // useEffect(()=>{
    //     api.get(`/post/${id}`)
    //     .then(response => console.log(response.data))
    // },[])

    return (
        <div>
            <Form title={'Editar Cadastro'} textButton={'Enviar'} onAction={handleUpdatePost}/>
        </div>
    )
}