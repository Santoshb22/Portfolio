import { useState } from "react";
import {contactModal} from "./context";

const AppProvider = ({children}) => {
    const [showContactModal, setShowContactModal] = useState(false);

    
  return (
    <contactModal.Provider value = {{showContactModal, setShowContactModal}}>
        {children}
    </contactModal.Provider>
  )
}

export default AppProvider