# Mushroom Festival

## Learning Objectives
- In response to a user event, mutate a single object in a state array and display the new state to the user (i.e., complete a todo).
- Describe the difference between a pure and impure function.

[Buggy Mushroom Festival](https://github.com/alchemycodelab/buggy-js-mushroom-festival)

### Live Example:
https://alchemycodelab.github.io/web-01-mushroom-festival/


# Mushroom Festival

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo|     .5 |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On load, see some mushrooms and default friends on the page                                |        1 |
| The number of mushrooms should be visible on the table and should update when mushroom state changes.  |        .5 |
| On clicking the 'forage' button, launch an alert telling the user if they found a mushroom. 50% of the time, the user should succeed.  | 1 |
| On clicking a friend, a mushroom should vanish from the table, and the friend should become more satisfied. Satisfaction level should be visible to the user as different emojis |     1 |
| On clicking a friend, if that friend is completely satisfied, they can eat no more mushrooms. Also, if you try to feed a friend and there are no mushrooms, user should get an alert telling them to go forage for another mushroom. |1|
| Click on the 'invite' button to create a new (unsatisfied) friend (with a random default name if none is provided) and add them to the page | 1 |

| Functions                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| PURE with TDD: `findFriendByName(name, friends)` : return friend object` |1|
| PURE with TDD: `renderMushroom()` : return DOM node` |1|
| PURE: `renderFriend(friend)` : return DOM node` |1|
| IMPURE: `displayFriends(friends)` : clears and appends to friend list DOM node` | 1|
