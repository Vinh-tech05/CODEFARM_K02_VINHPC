fetch("http://localhost:3000/products")
  .then((res) => {
    console.log(res);
    console.log(typeof res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let content = "";
    data.forEach((item) => {
      content += `
             <div>
        <div>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <p>Category: ${item.category}</p>
            <price>${item.price}$ </price>
            <button>ADD TO CART</button>
        </div>
    </div>
        `;
    });
    document.body.innerHTML = content;
  })
  .catch()
  .finally(() => {
    console.log("end Game");
  });

/**
 * ? fetch function
 * * Input: Request (url, method, body, query, params, headers)
 * * Output: Response Promise (data, status, message, status Text)
 */

/**
 * ? Promise là 1 đối tượng đặc biệt có sẵn trong JS
 * * - phương thức : `then`
 * * - phương thức : `catch`
 */
