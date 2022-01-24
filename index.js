import { data } from './scripts/getData.js';
import { addComment, addReply } from './scripts/addComments.js';

addComment(data.comments);
addReply(data.comments);

const sendButton = document.querySelector('.send');
const input = document.querySelector('.filter');

const createItem = () => {
  const content = input.value;

  const html = `
      <div class="comment-card reply-com user">
      <div class="likes">
        <span class="plus">
          <img src="./images/icon-plus.svg" alt="" />
        </span>
        <span class="color-purple like">0</span>
        <span class="plus">
          <img src="./images/icon-minus.svg" alt="" />
        </span>
      </div>
      <div class="info">
        <div class="user-info">
          <div class="pad">
            <span class="avatar">
              <img src="./images/avatars/image-juliusomo.png" alt="" />
            </span>
            <span class="name">juliusomo</span>
            <span class="you">you</span>
            <span class="color-gray">seconds ago</span>
          </div>
          <div class="reply">
          <span class="delete" style="color: red">Delete</span>
          <span class="color-purple">
              <img src="./images/icon-reply.svg" alt="" /> Reply
            </span>
          </div>
        </div>
        <div class="user-comment">
          <p class="color-gray">${content}</p>
        </div>
      </div>
    </div>
      `;

  localStorage.setItem('item', JSON.stringify(html));
};

const getValue = () => {
  localStorage.getItem('item');
  return document
    .querySelector('.main')
    .insertAdjacentHTML('beforeend', JSON.parse(localStorage.getItem('item')));
};

sendButton.addEventListener('click', () => {
  createItem();
  getValue();
  input.value = '';
});
