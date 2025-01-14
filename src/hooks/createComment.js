export default function createComment(email, comentario){
    let newComment = {
        email: email,
        comentario: comentario,
        data: new Date()
    }
    return newComment
}