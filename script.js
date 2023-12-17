const quotes = [
    "We can do anything we want to if we stick to it long enough. - Helen Keller",
    "Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit. - Eleanor Roosevelt",
    "It is never too late to be what you might have been. – George Eliot",
    "The power of imagination makes us infinite. – John Muir",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "We design our lives through the power of choices. – Richard Bach",
    "I don’t know the key to success, but the key to failure is trying to please everybody. - Bill Cosby",
    "If you hear a voice within you say 'you cannot paint', then by all means paint and that voice will be silenced. – Vincent Van Gogh",
    "You can’t use up creativity. The more you use, the more you have. - Maya Angelou",
    "The first step toward change is awareness. The second step is acceptance. - Nathaniel Branden",
    "Never let your memories be greater than your dreams. - Anonymous",
    "If you judge people, you have no time to love them. – Mother Teresa",
    "There are no shortcuts to any place worth going to. – Beverly Sills",
    "Act as if what you do makes a difference. It does. – William James",
    "The future belongs to those who prepare for it today. – Malcolm X",
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    "I always wanted to be somebody, but now I realize I should have been more specific! – Lily Tomlin",
    "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness that most frightens us. - Marianne Williamson",
    "Dream as if you’ll live forever; live as if you’ll die today – James Dean",
    "When you reach the end of your rope, tie a knot in it and hang on. – Franklin D. Roosevelt",
    "No one can make you feel inferior without your consent. – Eleanor Roosevelt",
    "In the long run, the sharpest weapon of all is a kind and gentle spirit. – Anne Frank",
    "The whole secret of a successful life is to find out what is one’s destiny to do and then do it. – Henry Ford",
    "In order to write about life first, you must live it. – Ernest Hemingway",
    "The big lesson in life, baby, is never to be scared of anyone or anything. – Frank Sinatra",
    "You can’t control the direction of the wind, but you can adjust your sails. – Jimmy Dean",
    "Life is a journey, not a destination. – Ralph Waldo Emerson",
    "The most important thing is to enjoy your life – to be happy – it’s all that matters. – Dalai Lama",
    "So be a mirror reflecting yourself back, and remembering the times when you thought all of this was too hard and that you’d never make it through. Remember the times you could have pressed quit – but you hit continue. – Rupi Kaur",
    "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost",
    "Do all the good you can, for all the people you can, in all the ways you can, as long as you can. — Hillary Clinton",
    "Don’t settle for what life gives you; make life better and build something. — Ashton Kutcher",
    "Life isn’t about finding yourself. Life is about creating yourself. — George Bernard Shaw",
    "You have to master your mind rather than let your mind master you. — Oscar Wilde",
    "Once in a while, it really hits people that they don’t have to experience the world in the way they have been told to. – Alan Keightley",
    "Life becomes easier when you learn to accept an apology you never got. - Robert Brault",
    "Live for each second without hesitation. — Elton John",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. — Albert Einstein",
    "Life is really simple, but men insist on making it complicated. — Confucius",
    "Life is a succession of lessons that must be lived to be understood. — Helen Keller",
    "Life is a great big canvas, and you should throw all the paint on it you can. — Danny Kaye",
    "Don’t give up on your dreams, or your dreams will give up on you. — John Wooden",
    "Life is what happens to you while you’re busy making other plans. - John Lennon",
    "If we did all the things we were capable of doing, we would literally astound ourselves. – Thomas Edison",
    "There’s no such thing as a tough decision; some things just need to be done. — Percy Bysshe Shelley",
    "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.— Steve Jobs"
];

let typingTimeout;

function generateQuote() {
    const quoteTextbox = document.getElementById('quoteTextbox');
    const quoteText = document.getElementById('quoteText');

    // Clear previous content and typing timeout
    quoteTextbox.value = '';
    quoteText.innerHTML = '';
    clearTimeout(typingTimeout);

    // Get a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the entire quote with letter-by-letter typing effect
    let index = 0;

    function typeLetter() {
        if (index < randomQuote.length) {
            quoteTextbox.value += randomQuote.charAt(index);
            index++;
            typingTimeout = setTimeout(typeLetter, 50); // Save the timeout ID for later clearing
        } else {
            // Clear the textbox and quoteText after the typing effect completes
            setTimeout(() => {
                quoteTextbox.value = '';
                quoteText.innerHTML = '';
            }, 5000); // Adjust the delay as needed
        }
    }

    // Display the entire quote after a short delay
    typingTimeout = setTimeout(typeLetter, 500);
}
