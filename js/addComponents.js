export async function loadHeaderAndFooter(component, container) {

    // fetch(component)
    //   .then(response => response.text())
    //   .then(data => {
    //     document.getElementById(container).innerHTML = data;
    //   });

    const componentResponse = await fetch(component);
  const containerHtml = await componentResponse.text();
  document.getElementById(container).innerHTML = containerHtml;

  }

  //index\components\footer.html