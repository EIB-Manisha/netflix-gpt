export const Validate =(email,password)=>{
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isFullName=/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(fullname);

    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordvalid) return "Password is not correct";
    // if (!isFullName) return "Please enter your full name";

    return null;
}