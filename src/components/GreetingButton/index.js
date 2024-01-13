import './index.css'

const GreetingButton = props => {
  const {buttonDetails, onChangeLanguage, isActive} = props
  const {buttonText} = buttonDetails
  const onClickButton = () => {
    onChangeLanguage(buttonText)
  }
  const activeButtonClassName = isActive ? 'active-btn' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        className={`language-button ${activeButtonClassName}`}
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default GreetingButton
