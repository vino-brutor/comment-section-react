import { useState } from "react"
import './index.css'
import createComment from "./hooks/createComment.js"
import CommentForm from "./components/CommentForm.jsx"
import CommentList from "./components/CommentList.jsx"

export default function App(){
  	const [comentarios, setComentarios] = useState([]) //state com o array de comentario

	function handleCreateComment(email, comment) { //função passada pro form
		const newComment = createComment(email, comment) //cria um novo comentario no hook
		setComentarios([...comentarios, newComment]) //atualiza o state do array de comentários
	}

	return (
    <div className="app">
    	<h1>Seção de comentários</h1>
    	<CommentForm onCreateComment={handleCreateComment}></CommentForm>
      	<hr />
		<CommentList comentarios={comentarios}></CommentList>
    </div>
  )
}