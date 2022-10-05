//Higher order Functions
/*A higher order function is one that does at least one of the following:
  i)takes one or more functions as an argument (parameter)
  ii)returns a function as the result
*/

import {posts} from "./post.js"

//1.for each

posts.foreach((post) => {
    console.log(post);
})

//2.filter

const filteredPosts = posts.filter((post) => {
    return post.userId === 1;
})
console.log(filteredPosts);

//3.map

const mappedPosts = filteredPosts.map((post) => {
    return post.id*10;
})
console.log(mappedPosts);

//4.reduce

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum+post;
}) 
console.log(reducedPostsValue);


