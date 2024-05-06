import "./styles.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useState } from "react";

export function OnePost() {

  const [post, setPost] =  useState({})

  const {id} = useParams()

  useEffect(()=>{
    api.get(`/posts/${id}`)
    .then(response=>setPost(response.data))
    .catch(err=>console.log(err))
  },[])

  return (
    <article className="onePostContainer">
      <h2>{post.title}</h2>
      <p>{post.name}</p>
      <p>{post.telefone}</p>
      <p>{post.email}</p>
      
    </article>
  );
}
