# :cherry_blossom: AniArchive

### AniArchive Anime List Application using React

# :cherry_blossom: Home Page!
![UI](https://github.com/yourboyace247/AniArchive/blob/main/imgs/UI.png)

Home page of AniArchive.

### Browse:
![Browse-btn](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Browse-btn.png)

Browse button directs you to the Home Page of the website.

### My List:
![My-List-btn](https://github.com/yourboyace247/AniArchive/blob/main/imgs/My-List-btn.png)

My List button directs you to the page with all the Anime you have added to your watchlist.

### Search:
![Search-in-browse](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Search-in-browse.png)

In Search input you can search for an Anime.

### Anime Card:
![Anime-card](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Anime-card.png)

This is the how each Anime gets displayed in website.<br>
You can see the Anime picture,with the Title, & the Rating (fetched by th API).<br>

### Add button:
![Add-anime-btn](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Add-anime-btn.png)

Button to add an Anime to your list.

### Add Anime in Watchlist Card
![Add-anime-in-list-card](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Add-anime-in-list-card.png)

Uppon clicking to add an Anime to your watchlist this card appears in order for you to add your details for the Anime.

### Status of Anime:
![Anime-status](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Anime-status.png)

On the first selector of the card you will have to add the status of the Anime<br>
"Watching": If you are currently watching this Anime.<br>
"Completed": If you have completed watching this Anime.<br>
"Plan to watch": If you plan to watch this Anime in the future.<br>
"Droppped": If you stopped watching this Anime.<br>

### Rating:
![Rating](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Rating.png)

Next selector is for rating the Anime between 1 to 10 :star:

### Date:
![Date-start-finish](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Date-start-finish.png)

The selector after the rating is for the Started date, so you basically add the Date you started watching the Anime.<br>
The final selector is for the date you have finished the Anime.

### Save button:
![Save-anime-in-list-btn](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Save-anime-in-list-btn.png)

The Save button is to save the Anime in your watchlist.

### Cancel button:
![Cancel-action-btn](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Cancel-action-btn.png)

The Cancel button is to cancel the action for the Anime.

### Details button:
![Details-btn](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Details-btn.png)

The Details button directs you to a new page, where you can see details regarding the Anime you clicked.

### Remove button:
![Remove-anime-from-list-btn](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Remove-anime-from-list-btn.png)

After you add an Anime to your list, the Remove button appears so you can remove it from your watchlist if you wish.

### Anime Details Page:
![Anime-details-page](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Anime-details-page.png)

Anime Details Page. Details related to the Anime, like the plot, genre, episodes etc... (fetched from API).

### My List Page:
![My-List-page](https://github.com/yourboyace247/AniArchive/blob/main/imgs/My-List-page.png)

My List Page. You will find all the Anime you have added to your wathclist.

### Search:
![Search-for-animes-in-mylist](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Search-for-animes-in-mylist.png)

You can search for Anime in your watchlist, the results will be successfull only if you are looking for an Anime that you have in your list.

### Filtering:
![Filter-by-status](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Filter-by-status.png)

There is a selector in the watchlist page, and you can basically filter the Animes in your list by status.

![Watching](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Watching.png)<br>
![Completed](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Completed.png)<br>
![PlanToWatch](https://github.com/yourboyace247/AniArchive/blob/main/imgs/PlanToWatch.png)<br>
![Dropped](https://github.com/yourboyace247/AniArchive/blob/main/imgs/Dropped.png)<br>

By default All the Animes in your watchlist are getting displayed, despite the status declared on them.

# :bulb: Technologies this app shows:

1. Core Framework: React 18, & React Hooks (useState, useEffect,useRef, custom hooks).
2. Routing & Navigation: React Router Dom (BrowserRouter, Routes, Route, Link, useParams, useLocation).
3. API Communication: Axios HTTP client for API calls, Jikan REST API v4.
4. State Management & Storage: React Context, Local Storage (Customer hook useLocalStorage), React State Management (component-level-state).
5. Keyboard Navigation: Custom Hook (useKey) for keyboard shortcuts.
6. Asynchronous Operations: Async/Await for API calls, Debouncing for search inputs, & Error Handling with try/catch.
7. Build Tool: Create React App, ES6+ JavaScript.
8. Development: ESLint, React Developer Tools, Chrome DevTools.
9. Architecture Patterns: Component-Based Architectures, Custom Hooks, Props Drilling, Conditional Rendering, Client-Side Routing.

## :tv: [AniArchive Video Presentation]()

You can watch my video presentation, and check in action how the website works.

# React installation & details.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


