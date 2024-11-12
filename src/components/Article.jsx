function Article() {
  const name = "Richo Febrian";
  const titles = ["Tutorial ReactJS", "Tutorial NextJS", "Tutorial NodeJS"]
  return (
    <>
      <div>{name}</div>
      <div>{titles.map(title => {
        return (
          <>
          <div>{title}</div>
          <div>{title}</div>
          </>
        ) 
      })}
      </div>
    </>
  )
}

export default Article;