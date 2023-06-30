
export const GifItem = ({ title, url, id} ) => {
    
    console.log()

    return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
