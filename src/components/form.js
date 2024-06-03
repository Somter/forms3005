import { useRef, useState } from "react";

export function FormFunc(props) {
    const userIdRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const zipCodeRef = useRef(null);
    const emailRef = useRef(null);

    const [isUserIdValid, setIsUserIdValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isAddressValid, setIsAddressValid] = useState(true);
    const [isZipCodeValid, setIsZipCodeValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const validateUserId = () => {
        const value = userIdRef.current.value;
        setIsUserIdValid(value.length >= 5 && value.length <= 7);
    };

    const validatePassword = () => {
        const value = passwordRef.current.value;
        setIsPasswordValid(value.length >= 7 && value.length <= 12);
    };

    const validateName = () => {
        const value = nameRef.current.value;
        setIsNameValid(/^[A-Za-z]+$/.test(value));
    };

    const validateAddress = () => {
        const value = addressRef.current.value;
        setIsAddressValid(/^[A-Za-z0-9]+$/.test(value));
    };

    const validateZipCode = () => {
        const value = zipCodeRef.current.value;
        setIsZipCodeValid(/^[A-Za-z0-9]+$/.test(value));
    };

    const validateEmail = () => {
        const value = emailRef.current.value;
        setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    };

    return (
        <div className="block-forms">
            <div>
                User id [5 to 7 characters] :  
                <input
                    type="text"
                    ref={userIdRef}
                    onChange={validateUserId}
                    className={isUserIdValid ? "valid" : "invalid"}
                />
                {!isUserIdValid && <div className="error-message">User ID must be between 5 and 7 characters.</div>}
            </div>
            
            <div>
                Password [7 to 12 characters] :  
                <input
                    type="password"
                    ref={passwordRef}
                    onChange={validatePassword}
                    className={isPasswordValid ? "valid" : "invalid"}
                />
                {!isPasswordValid && <div className="error-message">Password must be between 7 and 12 characters.</div>}
            </div>

            <div>
                Name [Alphabet characters] :  
                <input
                    type="text"
                    ref={nameRef}
                    onChange={validateName}
                    className={isNameValid ? "valid" : "invalid"}
                />
                {!isNameValid && <div className="error-message">Name must contain only alphabet characters.</div>}
            </div>

            <div>
                Address [Alphanumeric characters] :  
                <input
                    type="text"
                    ref={addressRef}
                    onChange={validateAddress}
                    className={isAddressValid ? "valid" : "invalid"}
                />
                {!isAddressValid && <div className="error-message">Address must contain only alphanumeric characters.</div>}
            </div>

            <div>
                ZIP Code [Alphanumeric characters] :  
                <input
                    type="text"
                    ref={zipCodeRef}
                    onChange={validateZipCode}
                    className={isZipCodeValid ? "valid" : "invalid"}
                />
                {!isZipCodeValid && <div className="error-message">ZIP Code must contain only alphanumeric characters.</div>}
            </div>

            <div>
                Email [Valid email] :  
                <input
                    type="email"
                    ref={emailRef}
                    onChange={validateEmail}
                    className={isEmailValid ? "valid" : "invalid"}
                />
                {!isEmailValid && <div className="error-message">Email must be valid.</div>}
            </div>

            <div>
                Sex [Select Male or Female] :  
                <label>
                    <input type="radio" name="sex" value="male" /> Male
                </label>
                <label>
                    <input type="radio" name="sex" value="female" /> Female
                </label>
            </div>

            <div>
                Language [Optional] :  
                <label>
                    <input type="checkbox" name="language" value="english" /> English
                </label>
                <label>
                    <input type="checkbox" name="language" value="non-english" /> Non English
                </label>
            </div>

            <div>
                <span>About [Optional] :  </span> 
                <textarea name="about"></textarea>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </div>
    );
}
