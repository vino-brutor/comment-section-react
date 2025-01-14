import { useState } from "react"

export default function CommentForm({onCreateComment}){
    const [email, setEmail] = useState('')
  	const [comentario, setComentario] = useState('')

    function handleEvent(){
        if(email.trim() && comentario.trim()){
            onCreateComment(email, comentario)
            setEmail('')
            setComentario('')
        } else{
            alert('Preencha todos os campos!')
        }
    }

    return (
        <div className="formComentario">
      		<label htmlFor="email">Email:</label>
      		<input required type="email" name="email" id="email" value={email} onChange={(ev) =>setEmail(ev.target.value)}/>
      		<label htmlFor="comentario">Comentário:</label>
			<textarea required name="comentario" id="comentario" value={comentario} onChange={(ev) =>setComentario(ev.target.value)}></textarea>
		    <button type="submit" onClick={() => handleEvent()}>Enviar comentário</button>
		</div>
    )
}