import linkElements from './data.json'

const App = () => {
  return (
    <div>
      <nav>
        <ol>
          {linkElements.map(linkElement => {
            return (
              <LinkElement
                key={linkElement.title}
                title={linkElement.title}
                href={linkElement.href}
              />
            )
          })}
        </ol>
        <form onSubmit={onSubmitForm}>
          <button type='submit'>Submit</button>
        </form>
      </nav>
    </div>
  )
}

const onSubmitForm = e => {
  e.preventDefault()
  alert("You've submitted the form!")
}

const linkElementStyle = {
  color: 'red',
  textDecoration: 'none',
  ':hover': {
    color: 'blue',
    fontWeight: 'bold'
  }
}

const onChangeLinkElement = e => {
  console.log({ e: e.target })
}
const LinkElement = ({ href, title }) => {
  return (
    <li>
      <a style={linkElementStyle} href={href}>
        {title}
      </a>
      <input name={title} onChange={onChangeLinkElement} />
    </li>
  )
}

export default App
