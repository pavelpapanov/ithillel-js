import React from "react";
import './App.css';
import ListItem from "./ui/components/ListItem";
import Button from "./ui/components/Button";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { id: 1, icon: "😅", count: 0 },
        { id: 2, icon: "🤪", count: 0 },
        { id: 3, icon: "🤓", count: 0 },
        { id: 4, icon: "💪", count: 0 }
      ],
      showResult: false,
      emojiWinner: null
    }
  }

  handleVote = (id) => {
    this.setState((prevState) => {
      const updateEmojis = prevState.emojis.map((emoji) => {
        if (emoji.id === id) {
          return { ...emoji, count: emoji.count + 1 }
        }
        return emoji;
      });
      return {
        emojis: updateEmojis
      }
    })
  }

  handleShowResults = () => {
    this.setState((prevState) => {
      const emojiWinner = prevState.emojis.reduce((prev, current) => {
        return prev.count > current.count ? prev : current;
      })
      return {
        showResult: true,
        emojiWinner
      }
    })
  }

  render() {
    const { emojis, showResult, emojiWinner } = this.state;
    return (
        <div className="container">
          <ul className="emoji-list">
            {
              emojis.map((emoji) => {
                return (
                    <ListItem
                        key={emoji.id}
                        icon={emoji.icon}
                        count={emoji.count}
                        onClick={() => this.handleVote(emoji.id)}
                        customClass="emoji-list__item"
                    />
                )
              })
            }
          </ul>
          <Button text="Показати результат" onClick={this.handleShowResults}/>
          {
              showResult && (
                  <div>
                    <h3>Переможець:</h3>
                    {emojiWinner && <div>{emojiWinner.icon} - {emojiWinner.count}</div>}
                  </div>
              )
          }
        </div>
    )
  }
}