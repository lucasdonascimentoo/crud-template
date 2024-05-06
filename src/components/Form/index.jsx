import { useForm } from 'react-hook-form'
import "./styles.css"
import {api} from '../../lib/axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const postSchema = yup.object({
  nome:yup.string().required('Digite seu nome!'),
  telefone:yup.string().required('Digite o seu telefone!'),
  email:yup.string().email().required('Digite seu e-mail!')
})

export function Form({title, textButton, onAction}) {

    const {id} = useParams()

    const{ register, handleSubmit, reset, formState: { errors }} = useForm({
      resolver: yupResolver(postSchema)
    })
    

    async function getDataUpdate(){
      const response = await api.get(`/posts/${id}`)
      reset(response.data)
    }

    useEffect(()=>{
      getDataUpdate()
    },[])

  return (
    <form onSubmit={handleSubmit(onAction)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Nome" {...register("nome")} />
        {errors.nome?.message}
      </div>

      <div className="field">
        <input placeholder="Telefone" {...register("telefone")}/>
        {errors.telefone?.message}
      </div>

      <div className="field">
        <textarea placeholder="E-mail" {...register("email")}/>
        {errors.email?.message}
      </div>

      <button type='submit'>{textButton}</button>
    </form>
  );
}
