const saveBtn = document.getElementById('save-btn');
const bottom = document.getElementById('bottom');

// Function to save a bookmark
const saveBookmark = () => {
    const siteNameInput = document.getElementById('site-name');
    const siteURLInput = document.getElementById('site-url');

    const bookmark = {
        Name: siteNameInput.value,
        URL: siteURLInput.value
    }

    if (siteNameInput.value !== '' && siteURLInput.value !== '') {

        const savedBookmarks = document.createElement('ul');
        savedBookmarks.classList.add('saved-bookmarks');

        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${bookmark.URL}">${bookmark.Name}</a> `;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Remove';

        savedBookmarks.appendChild(listItem);
        savedBookmarks.appendChild(deleteBtn);
        bottom.appendChild(savedBookmarks);

        // Event listener for remove button to delete bookmark
        deleteBtn.addEventListener('click', () => {
            savedBookmarks.removeChild(listItem);
            savedBookmarks.removeChild(deleteBtn);
            if (savedBookmarks.childNodes.length === 0) {
                savedBookmarks.remove();
            }
        });

        siteNameInput.value = '';
        siteURLInput.value = '';

    } else {
        alert('Please fill the input fields.....');
    }
}
// Event listener for save button to save bookmark
saveBtn.addEventListener('click', saveBookmark);
