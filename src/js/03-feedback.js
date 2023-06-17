import throttle from 'lodash.throttle'

const feedbackForm = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input');
const textareaForm = document.querySelector('textarea');

const formData = {};

const KEYFORM = 'feedback-form-state';
const saveFormData = JSON.parse(localStorage.getItem(KEYFORM)) || formData;


feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

populateForm(saveFormData);

function onFormInput(evt) {
   
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(KEYFORM, JSON.stringify(formData));

};

function onFormSubmit(evt) {
   
    evt.preventDefault();
    console.log(saveFormData);
    evt.target.reset();
    localStorage.removeItem(KEYFORM);
    formData.email = '';
    formData.message = '';
};

function populateForm() {
  
    if (saveFormData) {
       
        inputForm.value = saveFormData.email ?? '';
        textareaForm.value = saveFormData.message ?? '';
    };
};
