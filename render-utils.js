export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');

    return div;
}

export function renderFriend(friend) {
    // make three elements: an outer div, a place for the name, and a place for an emoji
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    // add friend, name, and emoji classes to the appropriate elements
    div.classList.add('friend');
    nameEl.classList.add('name');
    emojiEl.classList.add('emoji');

    // put the friend's name in the nameEl
    nameEl.textContent = friend.name;
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level
    if (friend.satisfaction === 3) {
        emojiEl.textContent = '😃';
    } else if (friend.satisfaction === 2) {
        emojiEl.textContent = '🙂';
    } else if (friend.satisfaction === 1) {
        emojiEl.textContent = '😐';
    } else if (friend.satisfaction === 0) {
        emojiEl.textContent = '💀';
    }
    // append the emojiEl and nameEl to the outer div
    div.append(nameEl, emojiEl);

    // return the outer div
    return div;
}
