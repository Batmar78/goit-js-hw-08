import throttle from 'lodash.throttle'

const feedbackForm = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input');
const textareaForm = document.querySelector('textarea');

const formData = {};

const KEYFORM = 'feedback-form-state';
const consFormData = JSON.parse(localStorage.getItem(KEYFORM));
const saveFormData = JSON.parse(localStorage.getItem(KEYFORM)) ?? formData;
// const saveFormData = JSON.parse(localStorage.getItem(KEYFORM));


feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput(evt) {
   
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(KEYFORM, JSON.stringify(formData));

};

function onFormSubmit(evt) {
   
    evt.preventDefault();
    console.log(consFormData);
    evt.target.reset();
    formData.email = '';
    formData.message = '';
    localStorage.removeItem(KEYFORM);
    
};

function populateForm() {
  
    if (saveFormData) {
       
        inputForm.value = saveFormData.email ?? '';
        textareaForm.value = saveFormData.message ?? '';
    };
};
