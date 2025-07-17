import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({name: '', gender: '',profession: '',address: '', });
  const [formErrors, setFormErrors] = useState({});
   const validateField = (fieldName, value) => {
    let errorMessage = '';
    if (fieldName === 'name') {
    if (!value.trim()) errorMessage = 'Name is required.';
    }
    if (fieldName === 'gender') {
      if (!value) errorMessage = 'Gender is required.';
    }
    if (fieldName === 'profession') {
      if (!value) errorMessage = 'Profession is required.';
    }
    if (fieldName === 'address') {
      if (!value) errorMessage = 'Address is required.';
    }
    return errorMessage;
  };
const handleInputChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
    setFormData((prevData) => ({...prevData, [name]: value, }));
    const error = validateField(name, value);
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error,}));
  };
 const handleFormSubmit = (event) => {
  event.preventDefault();
  const errors = {};
  for (const field in formData) {
    const error = validateField(field, formData[field]);
    if (error) errors[field] = error;
  }
  setFormErrors(errors);
  if (Object.keys(errors).length === 0) {
    console.log('Form submitted successfully:', formData);
    setFormData({ name: '', gender: '', profession: '', address: '' });
  } else {
    console.log('Form contains errors');
  }
};

return (
<div className="min-h-screen bg-purple-200 flex items-center justify-center">
<form  className="bg-white p-6 w-full max-w-md shadow rounded "onSubmit={handleFormSubmit}>
<div>
<label className="block font-medium mb-1">Name</label>
<input type="text" name="name" onChange={handleInputChange} value ={formData.name}className="w-full border px-3 py-2 rounded" />
{formErrors.name&&<p className="text-red-500 text-sm">{formErrors.name}</p>}
 </div>
  <div>
     <label className="block font-medium mb-1">Gender</label>
    <div className="flex gap-4">
<label><input type="radio" name="gender" value="Male" onChange={handleInputChange} /> Male</label>
  <label><input type="radio" name="gender" value="Female" onChange={handleInputChange} /> Female</label>
     </div>
     {formErrors.gender && <p className="text-red-500 text-sm">{formErrors.gender}</p>}
   </div>
<label className="block font-medium mb-1">Profession</label>
 <select name="profession" value={formData.profession} className="w-full border px-3 py-2 rounded"onChange={handleInputChange}>
  <option value="">select profession</option>
  <option value="Engineer">Engineer</option>
  <option value="Doctor">Doctor</option>
  <option value="Lawyer">Lawyer</option>
</select>
 {formErrors.profession && <p className="text-red-500 text-sm">{formErrors.profession}</p>}
        <div>
  <label className="block font-medium mb-1">Address</label>
 <textarea name="address" onChange={handleInputChange} value={formData.address}className="w-full border px-3 py-2 rounded" />
 {formErrors.address && <p className="text-red-500 text-sm">{formErrors.address}</p>}
        </div>
<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded "> Submit</button>
      </form>
    </div>
  );
}

export default App;
