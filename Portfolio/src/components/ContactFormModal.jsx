import { useContext, useState } from "react";
import Button from "./Button"
import { IoClose } from "react-icons/io5";
import { contactModal } from "../contextAPI/context";

const ContactFormModal = () => {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const {setShowContactModal} = useContext(contactModal);
    const access_key = import.meta.env.VITE_ACCESS_KEY;

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setContactData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        const formData = {
            ...contactData,
            access_key: access_key,
        }

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
                },
                body: JSON.stringify(formData),
            })
            const result = await res.json();
    
            if (result.success) {
                setContactData({
                    name: "",
                    email: "",
                    message: "",
                    });
                setShowContactModal(false);
                alert(result.message);
            } else {
                alert("Failed to send your message. Please try again.")
            }

        } catch (error) {
            console.error(error);
            alert("An error occurred while submitting the form. Please try again.")
        }
    }
  return (
    <div 
    onClick={() => setShowContactModal(false)}
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div onClick={(e) => e.stopPropagation()}
        className="dark:text-white dark:bg-[#212529] w-1/2 md:w-1/3 p-4 flex flex-col gap-8 rounded-md shadow-lg">
            <div className="flex justify-end">
                <button 
                className="cursor-pointer"
                onClick={() => setShowContactModal(false)}>
                    <IoClose size={30}/>
                </button>
            </div>

            <form 
            onSubmit={handleFormSubmit}
            >
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input 
                    className="dark:bg-[#323232]" 
                    type="text" 
                    name="name" 
                    id="name"
                    value={contactData.name} 
                    onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="email">Your Email</label>
                    <input 
                    className="dark:bg-[#323232]" 
                    type="email" 
                    name="email" 
                    id="email"
                    value={contactData.email} 
                    onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor="message">Write your message here</label>
                    <textarea 
                    className="dark:bg-[#323232] "
                    name="message" 
                    id="message" 
                    rows={4} cols={50} 
                    value={contactData.message}
                    onChange={handleInputChange}
                    />
                </div>

                <Button type = "submit">
                    Submit
                </Button>
            </form>
        </div>
    </div>
  )
}

export default ContactFormModal