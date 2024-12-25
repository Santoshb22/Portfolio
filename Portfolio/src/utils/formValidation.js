export default contactFormValidation = (contactData) => {
    const errors = {}
    if (!contactData.name.trim()) errors.name = "Name is required.";
    if (!contactData.email.trim()) {
        errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(contactData.email)) {
        errors.email = "Please enter a valid email address.";
    }
    if (!contactData.message.trim()) errors.message = "Message is required.";
    return errors;
}