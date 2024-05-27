import buttonsHtml from './buttons.html';
import moduleHtml from './module.html';

import './index.css';

declare global {
  interface Window {
    acomicsLegacyClient: {
      sendFormAndParseHtml: (formElement: HTMLFormElement) => Promise<Document>
    }
  }
};

declare class HystModal {
  public constructor({ linkAttributeName }: { linkAttributeName: string });
};

declare type IssueFile = {
  file: File,
  name: string,
  description: string,
  status: boolean,
  onload: "unload" | "loading" | "error" | "success",
  card?: HTMLElement
};

const ADD_ISSUE_ACTION_PATH = '/action/manage/addIssue';

const issuesToUpload: IssueFile[] = [];
let modalIndex = 0;
let uploadStarted = false;

const onFirstInput = () => {
  const files: FileList = (document.querySelector(".multiple-issues-upload__dropbox-input") as HTMLInputElement).files;
  const dropbox = document.querySelector(".multiple-issues-upload__dropbox");
  for (const file of Array.from(files)) {
    issuesToUpload.push(createIssueFile(file));
  }
  dropbox.classList.add("multiple-issues-upload__dropbox-disabled");
  initTable();
};

const createLinks = (index: number) => {
  const preCount = (document.querySelector('.multiple-issues-upload') as HTMLElement).dataset.issuesCount;
  let name = "" + (index + 1 + Number(preCount));
  if (issuesToUpload[index].name) {
    name = name + ". " + issuesToUpload[index].name;
  }
  const links = document.createElement("div");
  links.className = "multiple-issues-upload__card-title-segment";
  links.innerHTML = buttonsHtml;
  (links.querySelector('.multiple-issues-upload__card-title') as HTMLElement).innerText = name;
  return links;
};

const createFileCard = (elem: File, index: number) => {
  const card = document.createElement("div") as HTMLElement;
  card.className = 'multiple-issues-upload__card';
  card.dataset.index = String(index);
  const thumbnailDiv = document.createElement("div");
  thumbnailDiv.className = "multiple-issues-upload__card-thumbnail";
  thumbnailDiv.setAttribute("data-hystmodal", "#preview-modal");
  const thumbnail = document.createElement("img");
  thumbnail.className = "image-fit";
  thumbnail.src = URL.createObjectURL(elem);
  thumbnailDiv.append(thumbnail);
  card.append(thumbnailDiv);
  card.append(createLinks(index));
  return card;
};

const createIssueFile = (file: File, name = "", description = ""): IssueFile => {
  return { file: file, name: name, description: description, status: false, onload: "unload" };
};

const deleteFile = (evt: MouseEvent) => {
  evt.preventDefault();
  const card = (evt.target as HTMLElement).closest('.multiple-issues-upload__card') as HTMLElement;
  const index = Number(card.dataset.index);
  issuesToUpload.splice(index, 1);
  initTable();
};

const handleSwitching = (evt: MouseEvent, direction: number) => {
  evt.preventDefault();
  const card = (evt.target as HTMLElement).closest('.multiple-issues-upload__card') as HTMLElement;
  const index = Number(card.dataset.index);
  if (direction) {
    [issuesToUpload[index], issuesToUpload[index + 1]] = [issuesToUpload[index + 1], issuesToUpload[index]];
  } else {
    [issuesToUpload[index], issuesToUpload[index - 1]] = [issuesToUpload[index - 1], issuesToUpload[index]];
  }
  initTable();
};

const handleButtons = (elem: HTMLElement) => {
  const deleteButton = elem.querySelector(".multiple-issues-upload__card-button_type_delete") as HTMLLinkElement;
  const editButton = elem.querySelector(".multiple-issues-upload__card-button_type_edit") as HTMLLinkElement;
  const rightArrow = elem.querySelector(".multiple-issues-upload__card-button_type_move-right") as HTMLLinkElement;
  const leftArrow = elem.querySelector(".multiple-issues-upload__card-button_type_move-left") as HTMLLinkElement;
  const previewImage = elem.querySelector(".multiple-issues-upload__card-thumbnail") as HTMLDivElement;
  previewImage.addEventListener("click", handleOnePreview);
  deleteButton.addEventListener("click", deleteFile);
  editButton.addEventListener("click", handleEditModalOpening);
  rightArrow.addEventListener("click", (evt) => {
    evt.preventDefault();
    handleSwitching(evt, 1);
  });
  leftArrow.addEventListener("click", (evt) => {
    evt.preventDefault();
    handleSwitching(evt, 0);
  });
};

const initTable = () => {
  const field = document.querySelector(".multiple-issues-upload__field");
  field.classList.remove("multiple-issues-upload__field_disabled");
  const cardList = document.querySelector(".multiple-issues-upload__list");
  cardList.innerHTML = "";
  let count = 0;
  for (const elem of issuesToUpload) {
    const card = createFileCard(elem.file, count);
    if (elem.onload === "loading") {
      card.classList.add("multiple-issues-upload__card_onload_loading");
    } else if (elem.onload === "error") {
      card.classList.add("multiple-issues-upload__card_onload_error");
    } else if (elem.onload === "success") {
      card.classList.add("multiple-issues-upload__card_onload_successful");
    }
    issuesToUpload[count].card = card;
    cardList.append(card);
    handleButtons(card);
    count++;
  }
  if (uploadStarted) {
    const arrows = document.querySelectorAll(".multiple-issues-upload__card-button_type_move-right, .multiple-issues-upload__card-button_type_move-left");
    arrows.forEach(arrow => {
      arrow.classList.add("multiple-issues-upload__card-button_type_move-block");
    });
  }
};

const handleInnerInput = () => {
  const files = (document.querySelector(".multiple-issues-upload__add-button") as HTMLInputElement).files;
  for (const elem of Array.from(files)) {
    issuesToUpload.push(createIssueFile(elem));
  }
  initTable();
};

const handleSaveEdit = () => {
  const textareaName = document.querySelector(".edit-modal__namespace") as HTMLTextAreaElement;
  const textareaDescription = document.querySelector(".edit-modal__description") as HTMLTextAreaElement;
  const index = modalIndex;
  issuesToUpload[index].name = textareaName.value;
  issuesToUpload[index].description = textareaDescription.value;
  initTable();
};

const initPage = (elem: HTMLElement) => {
  const uploadPage = document.createElement("section");
  uploadPage.className = "multiple-issues-upload__container";
  uploadPage.innerHTML = moduleHtml;
  elem.append(uploadPage);
};

const init = () => {
  const module = document.querySelector(".multiple-issues-upload") as HTMLElement;
  initPage(module);
  const input = document.querySelector(".multiple-issues-upload__dropbox-input");
  const add = document.querySelector(".multiple-issues-upload__add-button");
  const saveModal = document.querySelector(".edit-modal__button");
  const previewButton = document.querySelector(".multiple-issues-upload__preview-button") as HTMLButtonElement;
  const submitButton = document.querySelector(".multiple-issues-upload__submit-button") as HTMLButtonElement;
  input.addEventListener("change", onFirstInput);
  add.addEventListener("change", handleInnerInput);
  saveModal.addEventListener("click", handleSaveEdit);
  previewButton.addEventListener("click", handlePreview);
  submitButton.addEventListener("click", () => uploadImages(Number(module.dataset.comicId)));
};

const handleResponse = (elem: IssueFile, response: Document) => {
  if (elem.status) {
    return true;
  }
  elem.card.classList.remove("multiple-issues-upload__card_onload_loading");
  elem.card.classList.remove("multiple-issues-upload__card_onload_error");
  elem.card.classList.remove("multiple-issues-upload__card_onload_successful");
  if (!response.querySelector("#error")) {
    elem.card.classList.add("multiple-issues-upload__card_onload_successful");
    elem.status = true;
    elem.onload = "success";
    return true;
  } else {
    const error = response.querySelector("#error p");
    elem.card.classList.add("multiple-issues-upload__card_onload_error");
    const errorBlock = document.querySelector(".multiple-issues-upload__error");
    errorBlock.textContent = error.textContent;
    elem.onload = "error";
    return false;
  }
};

const handleBlockOnUpload = () => {
  const arrows = document.querySelectorAll(".multiple-issues-upload__card-button_type_move-right, .multiple-issues-upload__card-button_type_move-left");
  arrows.forEach(arrow => {
    arrow.classList.add("multiple-issues-upload__card-button_type_move-block");
  });
  const cardButtons = document.querySelectorAll(".multiple-issues-upload__card-button");
  cardButtons.forEach(cardButton => {
    cardButton.classList.add("multiple-issues-upload__card-button-block");
  });
  const cardImages = document.querySelectorAll(".multiple-issues-upload__card-thumbnail");
  cardImages.forEach(cardImage => {
    cardImage.classList.add("multiple-issues-upload__card-thumbnail-block");
  });
  const addIssuesInput = document.querySelector(".multiple-issues-upload__top-buttons");
  addIssuesInput.classList.add("multiple-issues-upload__top-buttons-block");
  const submitButton = document.querySelector(".multiple-issues-upload__submit-button") as HTMLButtonElement;
  submitButton.disabled = true;
};

const handleUnblockOnUpload = () => {
  const cardButtons = document.querySelectorAll(".multiple-issues-upload__card-button");
  const submitButton = document.querySelector(".multiple-issues-upload__submit-button") as HTMLButtonElement;
  const addIssuesInput = document.querySelector(".multiple-issues-upload__top-buttons");
  const cardImages = document.querySelectorAll(".multiple-issues-upload__card-thumbnail");
  cardImages.forEach(cardImage => {
    cardImage.classList.remove("multiple-issues-upload__card-thumbnail-block");
  });
  submitButton.disabled = false;
  submitButton.textContent = "Повторить попытку";
  cardButtons.forEach(cardButton => {
    cardButton.classList.remove("multiple-issues-upload__card-button-block");
  });
  addIssuesInput.classList.remove("multiple-issues-upload__top-buttons-block");
};

const uploadImages = async (serialId: number) => {
  uploadStarted = true;
  const errorBlock = document.querySelector(".multiple-issues-upload__error");
  errorBlock.textContent = "";
  handleBlockOnUpload();
  const loadingImage = document.querySelector(".multiple-issues-upload__lds-roller_disabled");
  loadingImage.classList.add("multiple-issues-upload__lds-roller");
  let success = true;
  for (const elem of issuesToUpload) {
    if (elem.status) {
      continue;
    }
    elem.card.classList.add("multiple-issues-upload__card_onload_loading");
    elem.onload = "loading";

    const formElement = document.createElement('form');
    formElement.setAttribute('method', 'post');
    formElement.setAttribute('action', ADD_ISSUE_ACTION_PATH);
    formElement.enctype = 'multipart/form-data';

    const comicsId = document.createElement('input');
    comicsId.type = 'text';
    comicsId.name = 'serialId';
    comicsId.value = String(serialId);

    const name = document.createElement('input');
    name.type = 'text';
    name.name = 'name';
    name.value = elem.name;

    const description = document.createElement('input');
    description.type = 'text';
    description.name = 'description';
    description.value = elem.description;

    const image = document.createElement('input');
    image.type = 'file';
    image.name = 'image';

    const list = new DataTransfer();
    list.items.add(elem.file);
    image.files = list.files;

    image.setAttribute('data-limit', '2097152');

    const button = document.createElement('button');
    button.type = 'submit';

    const submit = document.createElement('input');
    submit.type = 'hidden';
    submit.name = 'submit';
    submit.value = 'add';

    const publish = document.createElement('input');
    publish.type = 'hidden';
    publish.name = 'publish';
    publish.value = (document.querySelector('.multiple-issues-upload__publication-input:checked') as HTMLInputElement).value;

    const numberOrder = document.createElement('input');
    numberOrder.type = 'hidden';
    numberOrder.name = 'numberOrder';
    numberOrder.value = 'checked';

    formElement.append(comicsId);
    formElement.append(name);
    formElement.append(description);
    formElement.append(image);
    formElement.append(button);
    formElement.append(submit);
    formElement.append(publish);
    formElement.append(numberOrder);

    const response = await window.acomicsLegacyClient.sendFormAndParseHtml(formElement);

    if (!handleResponse(elem, response)) {
      success = false;
      break;
    }
  }
  loadingImage.classList.remove("multiple-issues-upload__lds-roller");
  if (success) {
    location.href = (document.querySelector('.multiple-issues-upload') as HTMLElement).dataset.successRedirectUrl;
  } else {
    handleUnblockOnUpload();
  }
};

const handleEditModalOpening = (evt: MouseEvent) => {
  evt.preventDefault();
  const cardElement = (evt.target as HTMLElement).closest('.multiple-issues-upload__card') as HTMLElement;
  const index = Number(cardElement.dataset.index);
  const img = document.querySelector(".edit-modal__img") as HTMLImageElement;
  const textareaName = document.querySelector(".edit-modal__namespace") as HTMLTextAreaElement;
  const textareaDescription = document.querySelector(".edit-modal__description") as HTMLTextAreaElement;
  img.src = URL.createObjectURL(issuesToUpload[index].file);
  textareaName.value = issuesToUpload[index].name;
  textareaDescription.value = issuesToUpload[index].description;
  modalIndex = index;
};

const handlePreview = () => {
  const container = document.querySelector(".preview-modal__container");
  container.innerHTML = "";
  for (const elem of issuesToUpload) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(elem.file);
    img.alt = "Предпросмотр";
    img.className = "preview-modal__image";
    container.append(img);
  }
};

const handleOnePreview = (evt: MouseEvent) => {
  evt.preventDefault();
  const cardElement = (evt.target as HTMLElement).closest('.multiple-issues-upload__card') as HTMLElement;
  const index = Number(cardElement.dataset.index);
  const container = document.querySelector(".preview-modal__container");
  container.innerHTML = "";
  const img = document.createElement("img");
  img.src = URL.createObjectURL(issuesToUpload[index].file);
  img.alt = "Предпросмотр";
  img.className = "preview-modal__image";
  container.append(img);
};

new HystModal({
  linkAttributeName: "data-hystmodal"
});


init();
