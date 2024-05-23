import classes from './Post.module.css'
function Post(props) {
    return (
        <div className={classes.post}>
            <p className={classes.auther}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </div>
    )
}

export default Post;