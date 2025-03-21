import {useState} from 'react'

import './index.css'

const languages = [
  {id: 0, value: 'ENGLISH', diplayText: 'English'},
  {id: 1, value: 'HINDI', diplayText: 'Hindi'},
]

const Accounts = () => {
  const [nameInput, setNameInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [languageInput, setLanguage] = useState(languages[0].value)

  const changeNameInput = e => {
    setNameInput(e.target.value)
  }

  const changeDateInput = e => {
    setDateInput(e.target.value)
  }

  const changeLanguage = e => {
    setLanguage(e.target.value)
  }

  const submitDetails = e => {
    e.preventDefault()
  }

  console.log(nameInput)

  return (
    <div className="accounts-container">
      <h1 className="head">Accounts</h1>
      <p className="description">
        Update your account settings. Set your preferred language and timezone.
      </p>
      <hr className="hr2" />
      <form onSubmit={submitDetails} className="form-container">
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={nameInput}
          onChange={changeNameInput}
          placeholder="Your name"
          className="inputEl"
        />
        <p className="info">
          This is the name that will be displayed on your profile and in emails.
        </p>
        <label className="label" htmlFor="date">
          Date of birth
        </label>
        <input
          type="date"
          id="date"
          value={dateInput}
          onChange={changeDateInput}
          placeholder="Pick a date"
          className="inputEl"
        />
        <p className="info">
          Your date of birth is used to calculate your age.
        </p>
        <label className="label" htmlFor="language">
          Language
        </label>
        <select
          className="inputEl"
          id="language"
          value={languageInput}
          onChange={changeLanguage}
        >
          {languages.map(each => (
            <option key={each.value} value={each.value}>
              {each.diplayText}
            </option>
          ))}
        </select>
        <p className="info">
          This is the language that will be used in the dashboard.
        </p>
        <button className="updateButton" type="submit">
          Update
        </button>
      </form>
    </div>
  )
}

export default Accounts
