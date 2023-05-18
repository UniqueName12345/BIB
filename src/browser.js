async function getHTML(url) {
  try {
    const [response, fallbackResponse] = await Promise.all([
      fetch(url),
      fetch('corserror.html')
    ]);
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Failed to load');
    }
  } catch (error) {
    throw new Error('Failed to load');
  }
}

async function loadHTML() {
  const { value: urlInput } = document.getElementById('url-input');
  const url = urlInput.replace(/^(?!https?:\/\/)/, 'https://');

  try {
    const html = await getHTML(url);
    const outputIframe = document.getElementById('output-iframe');
    outputIframe.srcdoc = html;
  } catch (error) {
    console.error(error);
  }
}
