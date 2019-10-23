const fetchAjaxJSON = () => {
    const url = 'https://api.chucknorris.io/jokes/random';
    axios.get(url)
      .then(rep => rep.data)   
      .then(ajax => {
        const image = ajax.icon_url;
        const quote = ajax.value
        const ajaxHtml = 
        `<p>${quote}</p>
        <img src=${image} alt = "Le Boss"/>`;

        document.getElementById('ajax').innerHTML = ajaxHtml;
      });
  }
  document.getElementById("AjaxButton").addEventListener("click", fetchAjaxJSON)

  fetchAjaxJSON();