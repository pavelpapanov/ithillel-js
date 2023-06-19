import { useState, useCallback } from "react";

export default function useTodoField(type) {
  const [value, setValue] = useState('');

  const onChange = useCallback(
      (event) => {
        const value = event.target.value;

        setValue(value);
      },
      [setValue]
  )

  return {
    value,
    type,
    onChange
  }
}