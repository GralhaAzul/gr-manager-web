import { InputHTMLAttributes, useRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(): InputProps {
  const inputRef = useRef<HTMLInputElement>(null)
  return <input ref={inputRef} />
}
