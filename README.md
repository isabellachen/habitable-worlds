# A challenge to get started with Redux Async Actions

Start off by getting [up to speed with the docs](https://redux.js.org/advanced/async-actions).

## Challenge
Build an app that calculates the habitability of 5 different astronomical bodies .

Here are the specifications:

- Information about each planet can be acquired from this [Firebase endpoint](https://habitable-worlds.firebaseio.com/data.json).
- All information on the planets should be displayed in a pleasing UI designed at your discretion.
- You must provide a way for users to calculate the habitability of the planets provided.
	- We have provided the function which provides the means to calculate the habitability of each planet, which you must use as-is.
	- Users must be able to begin running calculations on all planets simultaneously.
	- The UI must reflect the state of each planet's habitability calculation (not yet run, in progress, calculated, etc.)
	- In addition, the UI must display the state of _all_ planets together (not yet run, in progress, all calculated).
	- As the results come in, the planets must be ordered by their habitability score.

## Planet habitability algorithm

```js
function habitabilityCalculator() {
  var delay = 7000 + Math.random() * 7000;
  var planetHabitability = Math.random();

  return function(callback) {
    setTimeout(function() {
      callback(planetHabitability);
    }, delay);
  };
}
```
## Solution
[Habitable Worlds on Github Pages](https://isabellachen.github.io/habitable-worlds/)

[Repo on Github](https://github.com/isabellachen/habitable-worlds)

#### Notes
- `npm start` to launch
- Uses gh-pages to publish on github pages
- `npm run deploy` to publish on github pages, config is in package.json
- remove __REDUX_DEVTOOLS_EXTENSION__ before deploying, otherwise it will break for Safari.
