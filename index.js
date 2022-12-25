// instantiating an IntersectionObserver class with the all entries with its default behevior
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry); // checing the entry points is intersecting with view port or not
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // adding class show to show on entering into view port with animation
    } else {
      entry.target.classList.remove("show"); // removing class show to not show departaring from view port with animation
    }
  });
});
// lets grab all the hidden elements that will be animate on scroll
const hiddenElements = document.querySelectorAll(".hidden");

// observing the elements whether to animate or not on entering into view port
hiddenElements.forEach((element) => observer.observe(element));
