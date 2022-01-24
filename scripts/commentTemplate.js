function commentTemplate(i, reply = false) {
  const html = `
    <div class="${reply == false ? 'comment-card' : 'comment-card reply-com'}">
    <div class="likes">
      <span class="plus">
        <img src="./images/icon-plus.svg" alt="" />
      </span>
      <span class="color-purple like">${i.score}</span>
      <span class="plus">
        <img src="./images/icon-minus.svg" alt="" />
      </span>
    </div>
    <div class="info">
      <div class="user-info">
        <div class="pad">
          <span class="avatar">
            <img src="${i.user.image.png}" alt="" />
          </span>
          <span class="name">${i.user.username}</span>
          <span class="color-gray">${i.createdAt}</span>
        </div>
        <div class="reply">
          <span class="color-purple">
            <img src="./images/icon-reply.svg" alt="" /> Reply
          </span>
        </div>
      </div>
      <div class="user-comment">
        <p class="color-gray">${i.content}</p>
      </div>
    </div>
  </div>
    `;

  return html;
}

export { commentTemplate };
