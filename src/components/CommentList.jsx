import Comment from "./Comment"

export default function CommentList({comentarios}){
    return(
        <div className="CommentList">
            {
                comentarios.length <= 0 ? 
                (<p>Seja o primeiro a comentar!</p>) : 
                (comentarios.map((comment) => {
                    return (
                        <Comment email={comment.email} comment={comment.comentario} data={comment.data}></Comment>
                    )
                }))
            }
        </div>
    )
}