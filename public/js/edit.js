const postId = document.querySelector('input[name="post-id"]').value;

const editForm = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-body"]').value;

  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      titleitle,
      content,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Unable to update post, please try again.');
  }
  document.location.replace('/dashboard');
};

const deleteForm = async () => {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document.querySelector('#edit-post-form');
document.addEventListener('submit', editFormHandler);
document.querySelector('#delete-btn');
document.addEventListener('submit', deleteForm);