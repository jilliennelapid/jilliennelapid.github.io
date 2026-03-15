
// Loads the Default Content (About Me)
async function loadPage(page) {
  const response = await fetch(`/pages/${page}.html`);
  const html = await response.text();
  content.innerHTML = html;
}

loadPage('about');


// Allows for other pages to be loaded when clicking on the sidebar options
const links = document.querySelectorAll('#side-menu a');          // Gets all menu links from the side menu
const content = document.getElementById('content');                    // Gets the element that stores the page content


links.forEach((link) => {                                            // For each menu item
  link.addEventListener('click', async (event) => {         // Waits for a menu item to be clicked on
    event.preventDefault();                                                                  // When a click is done, stops default behavior to reload a page

    const page = link.dataset.page;                                                   // Get the proper page to load

    const response = await fetch(`/pages/${page}.html`);                     // Fetch the HTML page based on the clicked on name
    const html = await response.text();                                               // Awaits for the page to be retrieved and stores the page name

    content.innerHTML = html;                                                                // Uses the awaited name to load the proper page to the .content element
  });
});
