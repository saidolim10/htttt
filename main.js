const cardPost = async () => {
  let imgElement = document.querySelector(".img-post");
  let title = document.querySelector(".title-post").value;
  let datePost = document.querySelector(".Des-post").value;
  let PricePost = document.querySelector(".price-Post").value;
  let catygoryPost = document.querySelector(".catigory-post").value;
  let img = imgElement ? imgElement.value || imgElement.src || "" : "";

  try {
    let responsePost = await fetch("http://localhost:3000/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img: img,
        title: title,
        description: datePost,
        price: PricePost,
        category: catygoryPost,
      }),
    });
    if (!responsePost.ok) {
      throw new Error(`HTTP error! Status: ${responsePost.status}`);
    }
    let dataPost = await responsePost.json();
    console.log(dataPost);
  } catch (error) {
    console.error("Error:", error);
  }
};

let button = document.querySelector(".button");
if (button) {
  button.addEventListener("click", cardPost);
} else {
  console.error("Button with class '.button' not found!");
}
