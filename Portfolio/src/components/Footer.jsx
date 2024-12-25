import SocialConnects from "./SocialConnects"

const Footer = () => {
  return (
    <div className="dark:text-white dark:bg-[#212121] shadow-2xl shadow-black flex justify-around py-2">
        <div>
            <p className="my-2">Social Links</p> 
            <SocialConnects/>
        </div>
       
        <div>
            <p className="my-2">Contact Details</p>
            <ul className="text-gray-300">
                <li>9082190902</li>
                <li>bhardwajsantosh148@gmail.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer