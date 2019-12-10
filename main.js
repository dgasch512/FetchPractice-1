// fetch('./file.json')
//   .then(response => response.json())
//   .then(data => console.log(data))



let arrayOfPosts;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts()

}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

// create an arry of five posts from arr of posts
function getFive(arr) {
  let arrFive = [];
  for (let i = 0; i < 5; i++) {
    arrFive.push(arr[i]);
    arr.shift();
  }
  return arrFive
}
// display the result of getFive function 
const displayFive = () => {
  const allPosts = document.getElementById('all-posts')
  getFive(arrayOfPosts).map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

// sort out comments from posts 
function getPostItem(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if(!output.includes(this)) {
      output.push(arr[i])
    } else{}
  }
  return output;
}
// return the comments and display
const displayComs = () => {
  const allPosts = document.getElementById('all-posts')
  getPostItem(arrayOfPosts).map((post, body) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`${post.body}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}
// Same thing with Users
const displayUser = () => {
  const allPosts = document.getElementById('all-posts')
  getPostItem(arrayOfPosts).map((post, user) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

const post = {
  "userId": 12,
    "id": 12,
    "title": "My New Post",
    "body": "This is my comment. Look at me. Look at me. I am the captain now"
}

const newPost = post => {
  const options = {
    method: `POST`,
    body: JSON.stringify(post),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  return fetch('http://jsonplaceholder.typicode.com/posts', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error => console.error(`Error: ${error}`))
}

newPost(post)


fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
      id: 12,
      title: 'foo',
      body: 'bar',
      userId: 12
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))