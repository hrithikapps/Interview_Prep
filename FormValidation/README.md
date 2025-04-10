# 📋 useForm - A Custom React Hook for Form Handling

A reusable and scalable custom hook to manage form state, handle input changes, run validations, and manage submission in React.

---

## ✨ Features

- 🧠 Smart form state management
- 📦 Centralized validation logic
- ❌ Error handling
- 🚀 Submission logic integration
- 🔁 Reset form support

---

## 🔧 Installation

No need to install any libraries — just create the `useForm.js` file and import it in your components.

---

## 📄 Example: `useForm.js`

```js
import { useState } from 'react';

const useForm = (initialValues, validate, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      await onSubmit(values);
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
