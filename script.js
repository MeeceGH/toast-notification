const button = document.querySelector('.btn');
const notifs = document.querySelector('.notifs');

button.addEventListener('click', () => {
    if (notifs.childElementCount <= 7) {
        const newMessage = document.createElement('div');
        newMessage.textContent = randomMessage();
        newMessage.classList.add('notif');
        newMessage.classList.add(randomLabel());
    
        notifs.appendChild(newMessage);
    
        setTimeout(() => {
            newMessage.remove()
        }, 3000);    
    }
})

function randomMessage() {
    const options = ['One', 'Two', 'Three', 'Four'];
    const randomPick = Math.floor(Math.random() * 4);

    return ('Message ' + options[randomPick]);
}

function randomLabel() {
    const options = ['n-warning', 'n-success', 'n-info'];
    const randomPick = Math.floor(Math.random() * 3);

    return (options[randomPick]);
}