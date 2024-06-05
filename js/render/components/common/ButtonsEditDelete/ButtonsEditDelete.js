export function ButtonsEditDelete() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttons-container');

    const editBtn = document.createElement('button');
    const editBtnImg = document.createElement('img');
    editBtnImg.src = 'img/icons/edit.svg';
    editBtn.append(editBtnImg);

    const deleteBtn = document.createElement('button');
    const deleteBtnImg = document.createElement('img');
    deleteBtnImg.src = 'img/icons/basket.svg';
    deleteBtn.append(deleteBtnImg);

    buttonContainer.append(editBtn, deleteBtn);
    return buttonContainer;
}
