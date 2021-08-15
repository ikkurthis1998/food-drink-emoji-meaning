import './App.css';
import {useState} from 'react';

var emojiDictionary = {
  "🍇": "grapes",
  "🍈": "melon",
  "🍉": "watermelon",
  "🍊": "tangerine",
  "🍋": "lemon",
  "🍌": "banana",
  "🍍": "pineapple",
  "🥭": "mango",
  "🍎": "apple",
  "🍏": "green apple",
  "🍐": "pear",
  "🍑": "peach",
  "🍒": "cherries",
  "🍓": "strawberry",
  "🥝": "kiwi fruit",
  "🍅": "tomato",
  "🥥": "coconut",
  "🥑": "avocado",
  "🍆": "eggplant",
  "🥔": "potato",
  "🥕": "carrot",
  "🌽": "corn",
  "🌶": "hot pepper",
  "🥒": "cucumber",
  "🥬": "leafy green",
  "🥦": "broccoli",
  "🍄": "mushroom",
  "🥜": "peanuts",
  "🌰": "chestnut",
  "🍞": "bread",
  "🥐": "crossiant",
  "🥖": "baguette bread", 
  "🥨": "pretzel",
  "🥯": "bagel",
  "🥞": "pancakes",
  "🧀": "cheese wedge",
  "🍖": "meat on bone",
  "🍗": "poultry leg",
  "🥩": "cut of meat",
  "🥓": "bacon",
  "🍔": "burger",
  "🍟": "french fries",
  "🍕": "pizza",
  "🌭": "hot dog",
  "🥪": "sandwich",
  "🌮": "taco",
  "🌯": "burrito",
  "🥙": "stuffed flatbread",
  "🥚": "egg",
  "🍳": "cooking",
  "🥘": "shallow pan of food",
  "🍲": "pot of food",
  "🥣": "bowl with spoon",
  "🥗": "green salad",
  "🍿": "popcorn",
  "🧂": "salt",
  "🥫": "canned food",
  "🍱": "bento box",
  "🍘": "rice cracker",
  "🍙": "rice ball",
  "🍚": "cooked rice",
  "🍛": "curry rice",
  "🍜": "steaming bowl",
  "🍝": "spaghetti",
  "🍠": "roasted sweet potato",
  "🍢": "oden",
  "🍣": "sushi",
  "🍤": "fried shrimp",
  "🍥": "fish cake with swirl",
  "🥮": "moon cake",
  "🍡": "dango",
  "🥟": "dumpling",
  "🥠": "fortune cookie",
  "🥡": "takeout box",
  "🍦": "soft ice cream",
  "🍧": "shaved ice",
  "🍨": "ice cream",
  "🍩": "doughnut",
  "🍪": "cookie",
  "🎂": "birthday cake",
  "🍰": "shortcake",
  "🧁": "cupcake",
  "🥧": "pie",
  "🍫": "chocolate bar",
  "🍬": "candy",
  "🍭": "lollipop",
  "🍮": "custard",
  "🍯": "honey pot",
  "🍼": "baby bottle",
  "🥛": "glass of milk",
  "☕": "hot beverage",
  "🍵": "teacup without handle",
  "🍶": "sake",
  "🍾": "bottle with popping cork",
  "🍷": "wine glass",
  "🍸": "cocktail glass",
  "🍹": "tropical drink",
  "🍺": "beer mug",
  "🍻": "clinking beer mugs",
  "🥂": "clinking glasses",
  "🥃": "tumblr glass",
  "🥤": "cup with straw",
  "🥢": "chopsticks",
  "🍽": "fork and knife with plate",
  "🍴": "fork and knife",
  "🥄": "spoon",
  "🔪": "kitchen knife",
  "🏺": "amphora"
}

var emojis = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("");

  function getmeaning(event) {
    var input = event.target.value;
    console.log(input);
    if (emojiDictionary[input] !== undefined){
      setMeaning(emojiDictionary[input]);
    } else if (input === "") {
      setMeaning("");
    } else {
      setMeaning("Sorry, emoji not found");
    }
  }

  function clickHandler(emoji) {
    var input = emoji.target.innerText;
    if (emojiDictionary[input] !== undefined){
      setMeaning(emojiDictionary[input]);
    } else if (input === "") {
      setMeaning("");
    } else {
      setMeaning("Sorry, emoji not found");
    }
  }

  return (
    <div className="App">
        <h1>
          know your food emojis
        </h1>
        <p>Enter the emoji, you want to know the meaning for</p>
        <input type="text" className="input-area" onChange={getmeaning}></input>
        <h2>{meaning}</h2>
        <div className="emoji-list">
          {
          emojis.map(
            emoji => {
              return(
                <div key={emoji} className="emoji" onClick={clickHandler} style={{cursor: 'pointer'}}>
                  {emoji}
                </div>
                )
              }  
            )
          }
        </div>
    </div>
  );
}

export default App;
