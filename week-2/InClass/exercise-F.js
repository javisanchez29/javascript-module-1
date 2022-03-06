function userChecker (userName, userType){
    const firstLetter = userName.charAt(0);
    const userlength = userName.length;
    const isValidLength = userlength >= 5 && userlength <= 10;
    const isASuperUser = userType === "admin" || userType === "manager"
        
    if (isASuperUser || ( firstLetter=== userName.charAt(0).toUpperCase() && isValidLength ) ){
        return "Username valid";
    }
    else{
        return "Username invalid"
    }
}

console.log(userChecker("Javier","admin"));