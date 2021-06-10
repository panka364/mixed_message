const fortunes = ["The fortune you seek is on another plane",
    "A closed mouth gathers no feet",
    "A conclusion is simply the place where you got tired of thinking",
    "A cynic is only a frustrated optimist",
    "A foolish man listens to his heart, A wise man listens to a fortune teller",
    "You will die alone and poorly dressed",
    "A fanatic is one who can't change his mind, and won't change the subject",
    "If you look back, you'll soon be going that way",
    "You will live long enough to read many fortunes",
    "An alien of some sort will be appearing to you shortly",
    "Do not mistake temptation for opportunity",
    "Flattery will go far tonight",
    "He who laughs at himself never runs out of things to laugh at",
    "He who laughs last is laughing at you",
    "He who throws dirt is losing ground",
    "The greatest danger could be your stupidity",
    "The world may be your oyster, but it doesn't mean you'll get its pearl",
    "You will be hungry again in one hour",
    "The road to riches is paved with homework",
    "You can always find happiness at work on Friday",
    "Actions speak louder than  any fortune",
    "Because of your melodic nature, the moonlight never misses an appointment",
    "Don't behave with cold manners",
    "Don't forget you are always on our minds",
    "Fortune not found? Abort, Retry, Ignore",
    "Help! I am being held prisoner in a fortune factory",
    "Never forget a friend, Especially if he owes you",
    "Never wear your best pants when you go to fight for freedom",
    "Only listen to this fortune teller; disregard all other fortune telling units",
    "It is a good day to have a good day",
    "All fortunes are wrong except this one",
    "Someone will invite you to a Karaoke party",
    "That wasn't chicken",
    "There is no mistake so great as that of being always right",
    "You love Chinese food",
    "I am worth a fortune",
    "No snowflake feels responsible in an avalanche",
    "You will receive a fortune cookie containing the secrets to your future",
    "Some fortune\"s tell of a dark time in your future",
    "Don't let statistics do a number on you",
    "You are not illiterate",
    "May you someday be carbon neutral",
    "You have rice in your teeth",
    "Avoid taking unnecessary gambles, Lucky numbers: 12, 15, 23, 28, 37",
    "Ask your mom instead of a fortune teller",
    "Hard work pays off in the future, Laziness pays off now",
    "You think it's a secret, but they know",
    "If a turtle doesn't have a shell, is it naked or homeless?",
    "Change is inevitable, except for vending machines",
    "Don't eat the paper"]

const greetings = ["Hello!",
    "It’s nice to meet you.",
    "It’s a pleasure to meet you.",
    "Hi!",
    "It’s good to see you.",
    "G’day!",
    "Howdy!", 
    "Hey",
    "Hey there.",
    "What’s up?", 
    "What’s happening",
    "What’s happenin’?",
     "Yo!"]
const goodByes = ["Bye",
    "See you later", 
    "See you again soon", 
    "Talk to you later",
    "I must be going",
    "Take it easy",
    "I’m off for now!",
    "Goodbye",
    "I look forward to our next encounter",
    "Until next time",
    "Take care",
    "It was nice seeing you",
    "Farewell!",
    "Bye for now",
    "Have a good one",
    "Time to leave, stay in touch"]

        //creates a random Integer
function getRandom(array){
    const randomIndex = Math.floor(Math.random()*array.length);
    return randomIndex;
}
        //uses the random Integer created with getRandom() to return a element from the arrays containing phrases. Then prints them to the console.
function composeMessage(){
    const randomGreeting = greetings[getRandom(greetings)];
    const randomFortunes = fortunes[getRandom(fortunes)];
    const randomGoodbyes = goodByes[getRandom(goodByes)];

    console.log(`${randomGreeting}\n\n${randomFortunes}.\n\n${randomGoodbyes}!`);

}

composeMessage();