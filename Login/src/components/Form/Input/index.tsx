import { InputContainer } from "./styles";
import eyeOff from "../../../assets/eye-off.svg"
import eye from "../../../assets/eye.svg"
import { useState } from "react";

interface IInputProps {
  label: string,
  type: string,
  placeholder: string,
  value?: string,
  onChange?: any
}

export function Input({ label, type, placeholder, onChange, value }: IInputProps) {

  const [isShowPassword, setIsShowPassword] = useState<boolean>( type==='password' ? true : false )

  return (
    <InputContainer>
      <section>
        <label>{ label }</label>
        { type === 'password' && ( <a href="#"> Esqueceu a senha? </a> ) }
      </section>
      
      <input
        required
        id={type}
        type={isShowPassword ? "password" : "text"}
        name={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

      {type === 'password' && (
        isShowPassword === true
          ?
          <img
            onClick={() => setIsShowPassword(!isShowPassword)}
            className="eye"
            src={eyeOff}
            alt=""
          />
          :
          <img
            onClick={() => setIsShowPassword(!isShowPassword)}
            className="eye"
            src={eye}
            alt=""
          />
      )}
    </InputContainer>
  )
}