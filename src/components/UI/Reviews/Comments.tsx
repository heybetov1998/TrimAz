import Comment from "./Comment";

const user = { name: "Adil", givenRating: 3.2 };

const Comments = () => (
    <ul className="comments">
        <Comment user={user} />
        <Comment user={user} />
    </ul>
);

export default Comments;
