import { commentTemplate } from './commentTemplate.js';

function addComment(data) {
  data.map(i => {
    console.log(i.score);
    const html = commentTemplate(i);
    document.querySelector('.main').insertAdjacentHTML('beforeend', html);
  });
}

function addReply(data) {
  const withReply = data.filter(i => i.replies.length !== 0);
  const replies = withReply.map(i => i.replies);
  replies[0].map(i => {
    const html = commentTemplate(i, true);
    document.querySelector('.main').insertAdjacentHTML('beforeend', html);
  });
}

export { addComment, addReply };
