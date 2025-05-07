import html from '!!raw-loader!./index.html';


export const createProfile = () => {
    const wrapper = document.createElement('div');
    wrapper.insertAdjacentHTML('afterbegin', html);

    const imageContainer = wrapper.querySelector('.ids-profile-image');
    const input = wrapper.querySelector('.ids-profile-update input');

    input.addEventListener('change', (e) =>{
        const files = e.currentTarget.files;

        if(files.length > 0) {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                const image = document.createElement('img');
                image.src = e.currentTarget.result;
                imageContainer.innerHTML = '';
                imageContainer.appendChild(image);
            }

            reader.readAsDataURL(file);
        }
    });

    return wrapper.firstElementChild;
}