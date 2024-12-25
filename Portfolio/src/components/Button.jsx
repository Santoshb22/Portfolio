const Button = ({children, onClick, type}) => {
  return (
    <button type={type}
    className={`dark:bg-[rgba(88,175,223,.1)] dark:hover:bg-[rgba(88,175,223,.3)] text-xs md:text-sm lg:text-lg px-4 py-2 -mr-1 my-2 rounded-md
      ${type? "w-full": "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"}
      `}
    onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button