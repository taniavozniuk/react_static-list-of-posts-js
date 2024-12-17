export const CommentInfo = ({ coment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{coment.name}</strong>

      {' by '}

      <a className="CommentInfo__email" href={`mailto:${coment.email}`}>
        {coment.email}
      </a>
    </div>

    <div className="CommentInfo__body">{coment.body}</div>
  </div>
);

export default CommentInfo;
