// UI
const testimonialel = document.querySelector('.testimonial');
const userimageel = document.querySelector('.user-image');
const usernameel = document.querySelector('.username');
const roleel = document.querySelector('.role');


const testimonials = [
    {
        name: "Mya Mya",
        role: "Marketing",
        photo: "https://randomuser.me/api/portraits/women/11.jpg",
        text: "Mya Mya Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore odit explicabo labore accusamus, blanditiis enim accusantium exercitationem dicta a, culpa iusto fugit ipsum vero laborum animi. Excepturi, quibusdam non!",
    },
    {
        name: "Aung Aung",
        role: "Manager",
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
        text: "Aung Aung Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore odit explicabo labore accusamus, blanditiis enim accusantium exercitationem dicta a, culpa iusto fugit ipsum vero laborum animi. Excepturi, quibusdam non!",
    },
    {
        name: "Su Su",
        role: "Accountant",
        photo: "https://randomuser.me/api/portraits/women/12.jpg",
        text: "Su Su Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore odit explicabo labore accusamus, blanditiis enim accusantium exercitationem dicta a, culpa iusto fugit ipsum vero laborum animi. Excepturi, quibusdam non!",
    },
    {
        name: "Kyaw Kyaw",
        role: "Sales",
        photo: "https://randomuser.me/api/portraits/men/12.jpg",
        text: "Kyaw Kyaw Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore odit explicabo labore accusamus, blanditiis enim accusantium exercitationem dicta a, culpa iusto fugit ipsum vero laborum animi. Excepturi, quibusdam non!",
    },
    {
        name: "Zue Zue",
        role: "Warehouse Manager",
        photo: "https://randomuser.me/api/portraits/women/13.jpg",
        text: "Zue Zue Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolore odit explicabo labore accusamus, blanditiis enim accusantium exercitationem dicta a, culpa iusto fugit ipsum vero laborum animi. Excepturi, quibusdam non!",
    }
];
// console.log(testimonials);

let idx = 0;

function updatetestimonial() {
    const {name,role,photo,text} = testimonials[idx];

    testimonialel.textContent = text;
    userimageel.src = photo;
    usernameel.textContent = name;
    roleel.textContent = role;

    idx++;

    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}
updatetestimonial();

setInterval(updatetestimonial,10000);