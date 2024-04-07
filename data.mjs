import  {bestPlayers, postPlayer}  from "./app.js"

import { bestPlayers2 } from "./top2.mjs"
import { bestPlayers3 } from "./top3.mjs"




bestPlayers3()
bestPlayers2()
bestPlayers()

const buttons = document.getElementsByClassName('Btn');

// Loop through Pics and attatch event listener to each one
for (const button of buttons) {
    button.addEventListener('click', (event) => {
        button.textContent = "Top 3"; // Change text content of the clicked button

        const threePics = document.createElement('img');
        threePics.src = 'https://tse2.mm.bing.net/th?id=OIP.HcvXY9rss3HNAh5MG2PnDQAAAA&pid=Api&P=0&h=220';
        threePics.classList.add('pics');
        let parentContainer = document.querySelector('.pics'); 
        parentContainer.append(threePics);

        const threePics2 = document.createElement('img');
        threePics2.src = 'https://c.tenor.com/guyD4WAhjzgAAAAM/shai-sga.gif';
        threePics2.classList.add('pics');
        parentContainer.append(threePics2);

        const threePics3 = document.createElement('img');
        threePics3.src = 'https://media2.giphy.com/media/gkG7rU2mm6QiGqVsc1/200.gif?cid=790b7611xu3gfbs3mhzifxi1bb1lsixzeobj4c7pf9yx8k3v&rid=200.gif&ct=g';
        threePics3.classList.add('pics');
        parentContainer.append(threePics3);
    });
}
