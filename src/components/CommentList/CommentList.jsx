import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    <CommentInfo comments={comments} />
  </div>
);

export default CommentList;
