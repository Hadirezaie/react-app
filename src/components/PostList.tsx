import Post from "./Post";
import classes from "./PostList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="HadiRezaie" body="React.js is fun!" />
      <Post author="AliRezaie" body="Go ahead" />
    </ul>
  );
}

export default PostsList;
