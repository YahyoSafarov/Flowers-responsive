const btnEl = document.getElementById("btn");
const emojiName = document.getElementById("emoji-name");

const emoji = [];


async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=1680da6b1d9d8afad207d299d156725ccb30ee75")

    data = await response.json()



    for(let i=0; i<1500; i++){
        emoji.push({
            mojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmoji();

btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
})











//     for(let i = 0; i < 1500; i++){
//         emoji.push({
//             emojiName: data[i].character,
//             emojiCode: data[i].unicodeName,
//         })
//     }
// }

// getEmoji();


// btnEl.addEventListener("click", ()=> {
//     const randomNum = Math.floor(random() * emoji.length);
//     btnEl.innerText = emoji[randomNum].emojiName;
//     emojiNameEl.innerText = emoji[randomNum].emojiCode;
// })