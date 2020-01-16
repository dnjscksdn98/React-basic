import { useState, useCallback } from "react";

// inputs custom hook
// initialForm: useState default value
function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  // useCallback: reuse the memoized function when no deps has changed
  const onChange = useCallback(e => {
    const { name, value } = e.target; // extract the name and value from the current form
    setForm(form => ({ ...form, [name]: value })); // set the value to the input value
  }, []); // empty deps: it will always use the memoized function

  // clear the input forms
  // if there is a props that is used, add it to the deps
  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;
