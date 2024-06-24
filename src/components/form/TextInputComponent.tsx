import {Form} from "react-bootstrap";

interface InputProps {
  label: string,
  value: string,
  updateValue: (value: string) => void,
}

export function TextInputComponent({label, value, updateValue}: InputProps) {

  return (
      <>
        <Form.Label>{label}</Form.Label>
        <Form.Control
            type="text"
            value={value}
            onChange={e => updateValue(e.target.value)}/>
      </>
  )
}