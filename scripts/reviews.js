const reviews = [{
    name: 'Chloe',
    review: 'Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.'
  }, {
    name: 'Jaden',
    review: 'It’s an amazing expertise. The ambiance could be very welcoming and charming. Wonderful wines, meals and repair. Workers are extraordinarily educated and make nice suggestions.'
  }, {
    name: "Lily",
    review: "Amazing food. PERIOD. Service is always perfect, food is always on point, and the staff is very friendly and accommodating. Always looking forward to this place with my friends, the fried vanilla ice cream is exceptionally good!"
  },
  {
    name: 'Liam',
    review: 'Do your self a favor and go to this beautiful restaurant in Steak Co. The service is unmatched. The workers actually cares about your expertise. The meals is completely wonderful – all the things we tasted melted in different mouths. Completely the very best meal we had whereas in Seatle. Extremely advocate!'
  },
  {
    name: 'John',
    review: ' Wonderful meals. Menu is intensive and seasonal to a very excessive normal. Undoubtedly superb eating. It may be costly however price it and so they do completely different offers on completely different nights so it’s price checking them out earlier than you ebook. Extremely beneficial.'
  }
];

function addReview() {
  const name = document.querySelector('.name').value;
  const review = document.querySelector('.review').value;
  const newReview = {
    name: name,
    review: review
  };
  reviews.push(newReview);
  console.log(reviews);
  displayReviews();
}



displayReviews();

function displayReviews() {
  reviews.forEach((review) => {
    document.getElementById('review').innerHTML += `
    <div class='review-container'>
      <div class="">
        <span>${review.name}</span>
        <div class="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        </div>
      <p>${review.review}</p>
    </div>`
  });
}
