async function getHTML(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Failed to load');
    }
  } catch (error) {
    const fallbackResponse = await fetch('corserror.html');
    if (fallbackResponse.ok) {
      return fallbackResponse.text();
    } else {
      throw new Error('Failed to load');
    }
  }
}

function loadHTML() {
  const urlInput = document.getElementById('url-input').value.replace(/^(?!https?:\/\/)/, 'https://');
  getHTML(urlInput)
    .then(html => {
      const outputIframe = document.getElementById('output-iframe');
      outputIframe.srcdoc = html;
    })
    .catch(error => {
      console.error(error);
    });
}
