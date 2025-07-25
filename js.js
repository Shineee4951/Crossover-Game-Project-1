document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const postContent = document.getElementById('postContent').value;
    const timestamp = new Date().toLocaleString();

    
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
        <h2>You:</h2
        <p>${postContent}</p>
        <span class="timestamp">Posted on ${timestamp}</span>
    `;
    document.getElementById('postsContainer').appendChild(postElement);
    
    document.getElementById('postContent').value = '';
});
