import css from './PhonebookForm.module.css'

export const PhonebookForm = ({addNewContact}) => {

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const name = e.currentTarget.elements.contactName.value
    const phone = e.currentTarget.elements.contactNumber.value
    const email = e.currentTarget.elements.contactEmail.value
    const favourite = e.currentTarget.elements.contactFavourite.checked
    // const avatar = e.currentTarget.elements.contactAvatar.files[0] || null
    // const createdAt = (new Date).toString()

    const profileData = { name, phone, email, favourite }
    // console.log(profileData);
    addNewContact(profileData);
    e.currentTarget.reset()
  }
  
  return (
    <form className={css.formContainer} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>
        <span className={css.labelTitle}>Name</span>
        <input className={css.labelInput} type="text" name="contactName" placeholder='John Doe' required />
      </label>
      <label className={css.formLabel}>
        <span className={css.labelTitle}>Number</span>
        <input className={css.labelInput} type="tel" name="contactNumber" placeholder='555-55-55' required />
      </label>
      <label className={css.formLabel}>
        <span className={css.labelTitle}>Email</span>
        <input className={css.labelInput} type="email" name="contactEmail" placeholder='mail@example.com' required />
      </label>
      <label className={css.formLabel}>
        <span className={css.labelTitle}>Is Favourite?</span>
        <input className={css.labelCheckbox} type="checkbox" name="contactFavourite" />
      </label>
      <button className={css.button} type='submit'>Add Contact</button>
    </form>
  )
}
