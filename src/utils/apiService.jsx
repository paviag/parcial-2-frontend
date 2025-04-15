API_URL = ''

export async function login({ email, password }) {
  
}

export async function signup({ email, name, password, confirmpassword }) {

}

async function getFollowing({ userId }) {
  // gets users the current user is following
  return [];
}

export async function getTimelinePosts({ userId }) {
  //const response = await fetch(`${API_URL}/posts`);
  //return response.json();
  return [];
}

export async function getUserPosts({ userId }) {
  //const response = await fetch(`${API_URL}/posts`);
  //return response.json();
  return [];
}

export async function createPost({ content }) {
    
}

export async function sendComment({ comment, tweetId }) {
  // reply: id of post it is replying to, or null if it is not a reply
    
}


export async function deletePost({ postId }) {

}

export async function likePost({ postId, tweetId }) {

}

export async function followUser({ sourceUserId, targetUserId }) {

}