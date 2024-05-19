This is a code repository for the corresponding video tutorial - https://youtube.com/playlist?list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu.

Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called "Memories" and it is a simple social media app that allows users to post interesting events that happened in their lives.

Setup:

- run `npm i && npm start` for both client and server side to start the app

/////////// STEPS MODIFIED FOR GOOGLE OAUTH LOGIN //////////////////

While creating google oAUTH credentials, add 'http://localhost' as well as 'http://localhost:3000', as well as your route path like 'http://localhost:3000/auth' for which you need authentication

Delete cookies

Update chrome browser settings to allow third-party cookies from 'http://localhost:3000' as well as 'https://accounts.google.com'

/////////////////

EXECUTION FLOW

The execution flow is from the action creator getPosts -> api.fetchPosts(page) was called -> api/index.js fetchPosts(page) makes API call -> backend controller sends a response back to frontend to this line in actions/posts.js const { data } = await api.fetchPosts(page);

Then using the data as payload, action is dispatched, and reducer updates the state, return updated state to redux store. Then the components can access the store using useSelector

The action creator getPosts is called with a page number as an argument.
Inside getPosts, the function api.fetchPosts(page) is called, which sends a GET request to the server.
The server handles this request in the getPosts controller and sends a response back to the frontend.
The response data is then used as the payload in the dispatch call in getPosts action creator.
This dispatch call triggers the reducer in client/src/reducers/posts.js, which updates the state based on the action type (FETCH_ALL) and the payload.
The updated state is then stored in the Redux store.
Components can access this updated state from the Redux store using the useSelector hook from react-redux.
So, your understanding of the execution flow is correct.
