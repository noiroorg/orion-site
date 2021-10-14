const  Header = (props) => {
    return (
    <header className='header'>
        <title>{props.title}</title>
    </header>
    )
}
Header.defaultProps = {
  title: 'DUMMY START PAGE'
}

export default  Header
