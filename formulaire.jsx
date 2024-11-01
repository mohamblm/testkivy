import React, { useState } from 'react';
import './SignupForm.css'; // Import the CSS file

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailOrPhone: '',
    password: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <>
    <div className="form-container">
      <h2 className="heading">S'inscrire</h2>
      <p className="subheading">C’est rapide et facile.</p>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom de famille"
          value={formData.lastName}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="emailOrPhone"
          placeholder="Numéro de mobile ou e-mail"
          value={formData.emailOrPhone}
          onChange={handleChange}
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="Nouveau mot de passe"
          value={formData.password}
          onChange={handleChange}
          className="input"
        />
        <div className="birthdate">
          <label className="label">Date de naissance</label>
          <select name="birthDay" value={formData.birthDay} onChange={handleChange} className="select">
            {[...Array(31)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select name="birthMonth" value={formData.birthMonth} onChange={handleChange} className="select">
            {['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'].map(
              (month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              )
            )}
          </select>
          <select name="birthYear" value={formData.birthYear} onChange={handleChange} className="select">
            {[...Array(100)].map((_, i) => (
              <option key={i} value={2024 - i}>
                {2024 - i}
              </option>
            ))}
          </select>
        </div>
        <div className="gender">
          <label className="label">Genre</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Femme"
                checked={formData.gender === 'Femme'}
                onChange={handleChange}
                className="radio"
              />
              Femme
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Homme"
                checked={formData.gender === 'Homme'}
                onChange={handleChange}
                className="radio"
              />
              Homme
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Personnalisé"
                checked={formData.gender === 'Personnalisé'}
                onChange={handleChange}
                className="radio"
              />
              Personnalisé
            </label>
          </div>
        </div>
        <button type="submit" className="submit-button">S'inscrire</button>
      </form>
    </div>
    <div className="form-container">
      <h2 className='heading' >s'inscrire</h2>
      <p className="subheading">C’est rapide et facile.</p>
      <form className='form'>
        <input name='Prenom' placeholder='Prenom'/>
        <input name='Nom' placeholder='Nom'/>
        <input name='tel' type='phone' placeholder='Numero de telephone'/>
        <input name='psw' placeholder='Mot de pass'/>


        
      </form>

    </div>
    </>
  );
}
