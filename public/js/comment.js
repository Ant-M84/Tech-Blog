const postId = document.querySelector('input[name="post-id"]').value;

const commentForm = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('textarea[name="comment-body"]').value;

  if(comment) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        comment
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  };
};

document.querySelector('#new-comment-form');
document.addEventListener('submit', commentForm);