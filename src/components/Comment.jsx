export default function Comment({email, comment, data}){
    return (
        <div key={data.getTime()}>
            <p className="emailComentario">{email}</p>
            <p className="dataComentario">em {data.toLocaleString()}</p>
            <p className="comentarioPostado">{comment}</p>
            <hr />
        </div>
        
    )
}