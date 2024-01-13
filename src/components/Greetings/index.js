import {Component} from 'react'
import GreetingButton from '../GreetingButton'
import './index.css'

class Greetings extends Component {
  state = {
    activeLanguage: 'English',
  }

  onChangeLanguage = language => {
    this.setState({activeLanguage: language})
  }

  render() {
    const {activeLanguage} = this.state
    const {languageGreetingsList} = this.props
    const currentLanguageObj = languageGreetingsList.find(
      eachItem => eachItem.buttonText === activeLanguage,
    )

    return (
      <div className="background-container">
        <h1 className="heading">Multilingual Greetings</h1>

        <ul className="buttons-list-container">
          {languageGreetingsList.map(eachButton => (
            <GreetingButton
              key={eachButton.id}
              buttonDetails={eachButton}
              onChangeLanguage={this.onChangeLanguage}
              isActive={activeLanguage === eachButton.buttonText}
            />
          ))}
        </ul>

        <img
          src={currentLanguageObj.imageUrl}
          alt={currentLanguageObj.imageAltText}
          className="greetings-image"
        />
      </div>
    )
  }
}

export default Greetings
