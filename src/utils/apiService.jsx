const API_URL = 'http://0.0.0.0:8083/api/'

export async function getTweetData(tweetId) {
  // TODO? handle error nonexisting tweet
  const response = await fetch(`${API_URL}/tweets/${tweetId}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
    },
  });  
  
  const responseData = await response.json();

  return responseData.data;
}

export async function login(loginData) {
  const message = document.getElementById("message");
  message.innerHTML = "";

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
      message.innerHTML = "Please enter username and password";
      message.style.color = "red";

      return;
  }

  const response = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
  });
  
  const responseData = await response.json();
  if (response.ok) {
      const token = responseData?.data?.token;
      if (!token) {
          message.innerHTML = "Token not found";
          message.style.color = "red";
          return;
      }
      localStorage.setItem("token", token);
      localStorage.setItem("username", responseData.data.username)
      localStorage.setItem("name", responseData.data.name)
  } else {
      message.innerHTML = responseData.message;
      message.style.color = "red";
  }

  document.getElementById("password").value = "";
}

export async function signup(userData) {
  const message = document.getElementById("message");
  message.innerHTML = "";

  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  if (response.ok) {
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordConfirmation").value = "";

    message.innerHTML = "User created successfully";
  } else {
    const responseData = await response.json();
    message.innerHTML = responseData.message;
  }
}

async function getFollowing({ userId }) {
  // gets users the current user is following
  return [];
}

export async function getTimelinePosts() {
  // TODO? handle pagination 
  // TODO only get followe and sort chronologically
  const response = await fetch(`${API_URL}/tweets`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
    },
  });  
  
  const responseData = await response.json();

  return responseData.data;
}

export async function getUserPosts({ userId }) {
  //const response = await fetch(`${API_URL}/posts`);
  //return response.json();
  return [];
}

export async function createPost(postData) {
  const response = await fetch(`${API_URL}/tweets`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
    },
    body: JSON.stringify(postData)
  });  
}

export async function sendComment(commentData) {
  const message = document.getElementById("message");
  message.innerHTML = "";

  const response = await fetch(`${API_URL}/tweets/comments`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
    },
    body: JSON.stringify(commentData)
  });

  if (response.ok) {
    message.innerHTML = "Comment created successfully";
    message.style.display = "block"
  } else {
    const responseData = await response.json();
    message.innerHTML = responseData.message;
    message.style.display = "block"
  }
}


export async function deletePost({ postId }) {

}

export async function toggleLike(likeData) {
  const response = await fetch(`${API_URL}/tweets/likes`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
    },
    body: JSON.stringify(likeData)
  });
  const responseData = await response.json();
  if (response.ok) {
    return { likes: responseData.likes }
  } 
  return responseData.message;
}

export async function followUser({ sourceUserId, targetUserId }) {

}