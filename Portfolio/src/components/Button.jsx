const Button = ({children, onClick}) => {
  return (
    <button 
    className="dark:bg-[rgba(88,175,223,.1)] dark:hover:bg-[rgba(88,175,223,.3)] px-4 py-2 mr-2 rounded-md"
    onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button