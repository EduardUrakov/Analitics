"use strict";

const form = document.querySelector('.sign__up__form');
const passwordInput = form.querySelector('.password');
const retypePasswordInput = form.querySelector('.re__type__password');

function checkPasswords() {
    const passwordValue = passwordInput.value;
    const retypePasswordValue = retypePasswordInput.value;


    if (passwordValue !== retypePasswordValue) {
        passwordInput.style.border = '2px solid red';
        retypePasswordInput.style.border = '2px solid red';
    } else {
        passwordInput.style.border = '2px solid green';
        retypePasswordInput.style.border = '2px solid green';
    }
};

retypePasswordInput.addEventListener('input', checkPasswords);


conststars = document.querySelectorAll('.rating input');

stars.forEach(function (star, index) {
    star.addEventListener('click', function () {
        changeRating(index + 1);
    });
});


const currentRating = 0;

function changeRating(rating) {
    if (rating === currentRating) {
        rating = 0;
    }

    stars.forEach(function (star, index) {
        if (index < rating) {
            star.checked = true;
        } else {
            star.checked = false;
        }
    });

    currentRating = rating;
};